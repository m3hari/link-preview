import querystring from 'querystring'

import getMeta from './lib'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { url, pretty, format = pretty !== undefined } = querystring.parse(
    (new URL(request.url).search || '').substring(1),
  )

  if (url) {
    try {
      const result = await getMeta(url, {
        lang: request.headers.get('accept-language'),
      })
      return new Response(JSON.stringify(result, null, format ? 2 : 0), {
        headers: { 'content-type': 'application/json' },
      })
    } catch ({ message, status }) {
      return new Response(message, { status })
    }
  }

  return new Response(
    'url is required parameter. e.g try  /?url=http://github.com&pretty',
    {
      status: 422,
      headers: { 'content-type': 'application/json' },
    },
  )
}
