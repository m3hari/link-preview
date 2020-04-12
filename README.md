# Link Preview Meta

![Test](https://github.com/m3hari/link-preview-meta/workflows/Tests/badge.svg)

URL meta data (micro) service for link previewing.
Hosted on [cloudflare workers](https://workers.cloudflare.com/)

## Inspiration

|                                                                                                  **Google Keep**                                                                                                   |                                                                                                  **Telegram**                                                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![sample google keep](https://lh3.googleusercontent.com/_2f_HE1sctWqS-y7fdrJmSk449cLqFS9qfdogyxPfQDo452EB7x7RrAqpFIZ8BFGkE7Jn5qPe4hCSUDWVBMrnfJcuB_Qz7mQoTJBoJPRMuSHoV6VV3dfjAWuPj0fFI2QW60Cjxy2Aw=w1080-h1011-no) | ![sample telegram](https://lh3.googleusercontent.com/aahJmyhmDmGeO5rbQCfSej5B675CjtxTaXDEOCIFQjnG6W4KKTBVdfmUqUFMTVHCNaPDl3n0KaYDquA16dNgQM07tgvvM3OiIw1dHfws4I2IyDkRFfUe8Y_dhqzJe22Zh2mLp6Ckuw=w972-h1858-no) |

### Usage

Send your url as parameter for the **service**.

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

**Disclaimer**
This is not **[OG](https://ogp.me/)** meta extractor/parser. It just extracts meta information that is relevant for link **previewing**

## License

[MIT](LICENSE)
