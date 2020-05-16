import cheerio from 'cheerio'
import { ConnectionError, ValidationError } from './error'

const getOGProperty = (dom, prop) => {
  return dom(`meta[property='og:${prop}']`).attr(`content`)
}

const getDescription = dom =>
  getOGProperty(dom, 'description') ||
  dom(`meta[name=description]`).attr(`content`) ||
  dom(`meta[name=Document]`).attr(`content`)

const getTitle = dom => getOGProperty(dom, 'title') || dom(`title`).text()

const getSiteName = dom => getOGProperty(dom, 'site_name')

const getImage = dom => getOGProperty(dom, 'image')

const getFaviconPath = dom => {
  const fav = dom(`link[rel=icon]`).attr(`href`)
  return fav ? `${origin}${fav}` : null
}

/**
 * @typedef {Object} LinkMeta
 * @property {String} url - The requested url
 * @property {String} siteName - The name of the site
 * @property {String} title - A title about the content of the page
 * @property {String} image - An image link that represents the content of the page
 * @property {String} description - A description about the page
 */

/**
 * Scrapes meta information for the givin site
 * @param {String} url The url of the site
 * @param {Object} options options
 * @returns { Promise<LinkMeta> } The scrapped meta information
 */
const getMeta = async (url, options = {}) => {
  let urlDetail
  try {
    urlDetail = new URL(url)
  } catch (error) {
    throw new ValidationError('Invalid URL')
  }

  const { href, hostname, origin } = urlDetail
  try {
    const response = await fetch(url, {
      headers: {
        'accept-encoding': 'gzip',
        'accept-language': options.lang || 'en-US,en;',
      },
    })
    const contentType = response.headers.get('content-type')

    if (/text\/*/g.test(contentType)) {
      const html = await response.text()
      const head = html.match(/<head.*?>([\s\S]*?)<\/head>/g)[0]
      const doc = cheerio.load(head)
      return {
        url: href,
        siteName: getSiteName(doc) || hostname || '',
        title: getTitle(doc) || '',
        image: getImage(doc) || getFaviconPath(doc, origin) || '',
        description: getDescription(doc) || '',
      }
    }

    // TODO: for image content type, try to get the image
    return {
      url: href,
      title: '',
      siteName: hostname || '',
      image: '',
      description: '',
    }
  } catch (error) {
    // TODO: process the error type. Identify HTTP error
    console.error({ url, error })
    throw new ConnectionError("Can't reach the server for the given url")
  }
}

export default getMeta
