const cheerio = require('cheerio')

function getDescription(doc) {
  let description = doc(`meta[name=description]`).attr(`content`)

  if (description === undefined) {
    description = doc(`meta[name=Description]`).attr(`content`)
  }

  if (description === undefined) {
    description = doc(`meta[property='og:description']`).attr(`content`)
  }

  return description
}

function getTitle(doc) {
  let title = doc(`meta[property='og:title']`).attr(`content`)

  if (!title) {
    title = doc(`title`).text()
  }

  return title
}

function getSiteName(doc) {
  return doc(`meta[property='og:site_name']`).attr(`content`)
}

export async function getMeta(url) {
  const meta = { url }

  try {
    const response = await fetch(url)
    const contentType = response.headers.get('content-type')

    console.log('contentType:', contentType)

    if (/text\/*/g.test(contentType)) {
      const html = await response.text()

      console.log('Fetch page ... OK')

      const head = html.match(/<head.*?>([\s\S]*?)<\/head>/g)[0]

      console.log('Extract head ... OK')

      const doc = cheerio.load(head)

      console.log('Build DOM ... OK')

      meta.siteName = getSiteName(doc)
      meta.domain = ''
      meta.title = getTitle(doc)
      meta.description = getDescription(doc)
      meta.images = ''
      meta.favicons = ''
    } else {
      // TODO
    }
  } catch (error) {
    // TODO send log to cloud(sentry) logger
    console.error({ url, error })
  }

  return meta
}
