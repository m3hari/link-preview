const querystring = require('query-string')
const { getMeta } = require('./parse-meta')
const { VALID_URL_REGEX } = require('./util')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const { url } = querystring.parse(new URL(request.url).search || '')

  if (url) {
    console.log(`Processing ${url}`)
    const isValidUrl = url
      .replace(/\n/g, ' ')
      .split(' ')
      .find(token => VALID_URL_REGEX.test(token))

    if (!isValidUrl) {
      return new Response('Invalid URL', {
        status: 422,
      })
    }

    const result = await getMeta(url)

    return new Response(JSON.stringify(result), {
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(
    'url is required parameter. e.g /?url=http://github.com',
    {
      headers: { 'content-type': 'application/json' },
    },
  )
}
