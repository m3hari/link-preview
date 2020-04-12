import querystring from 'query-string'
import getMeta from './lib'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { url } = querystring.parse(new URL(request.url).search || '')

  if (url) {
    try {
      const result = await getMeta(url, {
        lang: request.headers.get('accept-language'),
      })
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
