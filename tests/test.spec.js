import getMeta from '../lib/index'
describe('API', function() {
  it('Returns correct format', async () => {
    const url = 'https://google.com/'
    const result = await getMeta(url)
    expect(result).toEqual({
      url,
      siteName: 'google.com',
      title: expect.any(String),
      image: expect.any(String),
      description: expect.any(String),
    })
  })

  it('Extract correct data', async () => {
    const url = 'https://www.youtube.com/watch?v=BtN-goy9VOY'
    const result = await getMeta(url, { lang: 'en-US,en;' })
    expect(result).toEqual({
      url,
      siteName: 'YouTube',
      title: 'The Coronavirus Explained & What You Should Do',
      image: 'https://i.ytimg.com/vi/BtN-goy9VOY/maxresdefault.jpg',
      description: expect.stringMatching(/Get Merch designed with ❤ from/),
    })
  })
})
