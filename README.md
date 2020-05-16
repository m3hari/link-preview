# Link Preview Meta

![Test](https://github.com/m3hari/link-preview-meta/workflows/Tests/badge.svg)

URL metadata (micro) service for link previewing.
Hosted on [cloudflare workers](https://workers.cloudflare.com/)

## Usage

- _url_ : Link url

- _pretty_ : Option to format the json response

**Example:**

https://meta.mehari.workers.dev/?url=http://github.com/m3hari&pretty

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

**Disclaimer**
This is not **[OG](https://ogp.me/)** meta extractor/parser. It just extracts meta information that is relevant for link **previewing**

## License

[MIT](LICENSE)
