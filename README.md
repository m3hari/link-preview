# Link Preview Meta

![Test](https://github.com/m3hari/link-preview-meta/workflows/Tests/badge.svg)

URL meta data (micro) service for link previewing. 
Hosted on [cloudflare workers](https://workers.cloudflare.com/)



## Why?
To Preview links in an app

**Google Keep**
![sample google keep](https://lh3.googleusercontent.com/CfROqaBp-j3kbYHqhNEvxdqsOAK39TaW7eyl8XhI7CHo_u5v080yl_zMJZKaf5XoEo3X9aQuwWtzH1rYagFYp1RekToKkUWSILztr73mu-b8uxyMAkUYJzDIj0qCvSCIMeNnsktQ0g=w1280-h170-no)

**Telegram**

![sample telegram](https://lh3.googleusercontent.com/aahJmyhmDmGeO5rbQCfSej5B675CjtxTaXDEOCIFQjnG6W4KKTBVdfmUqUFMTVHCNaPDl3n0KaYDquA16dNgQM07tgvvM3OiIw1dHfws4I2IyDkRFfUe8Y_dhqzJe22Zh2mLp6Ckuw=w972-h1858-no)
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


### TODOS

- [x] Add tests
- [ ] **PERF** Use network streams to improve performance without fully loading a page as implemented here https://github.com/velocityzen/meta-extractor


**Disclaimer**
This is not **[OG](https://ogp.me/)** meta extractor/parser. It just extracts meta information that is relevant for link **previewing**
