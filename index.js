const querystring = require('query-string')
const { getMeta } = require('./parse-meta')

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
    try {
      const result = await getMeta(url)
      return new Response(JSON.stringify(result), {
        headers: { 'content-type': 'application/json' },
      })
    } catch (error) {
      return new Response(error.message, {
        status: error.status,
      })
    }
  }

  return new Response(
    'url is required parameter. e.g /?url=http://github.com',
    {
      status: 422,
      headers: { 'content-type': 'application/json' },
    },
  )
}
