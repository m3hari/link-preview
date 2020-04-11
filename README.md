# Link Preview Meta

URL meta data (micro) service for link previewing.
Hosted on [cloudflare workers](https://workers.cloudflare.com/)

### **Disclaimer**

This is not **[OG](https://ogp.me/)** meta extractor/parser. It just extracts meta information that is relevant for link **previewing**

### Usage

Send your url as query string for this **service**.

**Example:**

https://link-preview-meta.mamome.workers.dev?url=http://github.com/m3hari

Response:

```json
{
  "url": "http://github.com/m3hari",

  "siteName": "GitHub",

  "title": "m3hari - Overview",

  "image": "https://avatars3.githubusercontent.com/u/9920926?s=400&u=f858860918953de6367e906655ea9b93fce019e7&v=4",

  "description": "Fullstack Developer Graphql, Node, and Vue. m3hari has 31 repositories available. Follow their code on GitHub."
}
```

Response Format

- `url : <String> The full url of the site`

- `title : <String> The title of the page. Tries meta.og:title and fallbacks to page.title`

- `description : <String> The description of the page. Tries meta.og.description and fallbacks to meta.description`

- `image : <String> a link to an image representing the page.Tries meta.og.image and fallbacks to page favicon`

- `siteName : <String> The name of the site og:site_name fallbacks to hostname of the site`

### TODOS

- [ ] Add tests
- [ ] Send errors to Sentry
- [ ] Support extracting youtube videos thumbnail and other content-types
- [ ] **PERF** Use network streams to improve performance without fully loading a page as implemented here https://github.com/velocityzen/meta-extractor

Note: You can use the `getMeta` function in `<root>/get-meta.js` to process a link with out using the service.
