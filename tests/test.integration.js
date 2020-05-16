const SERVICE_URL = 'https://lmeta.mehari.workers.dev'

describe('Integration', function() {
  it('Extract correct data', async () => {
    const url = 'https://www.youtube.com/watch?v=BtN-goy9VOY'
    const result = await (await fetch(`${SERVICE_URL}/?url=${url}`)).json()
    expect(result).toEqual({
      url,
      siteName: 'YouTube',
      title: 'The Coronavirus Explained & What You Should Do',
      image: 'https://i.ytimg.com/vi/BtN-goy9VOY/maxresdefault.jpg',
      description: expect.stringMatching(/Get Merch designed with ❤ from/),
    })
  })
})
