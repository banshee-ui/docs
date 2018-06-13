module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Banshee',
      description: 'A  renderless UI component and utility library for Vue.'
    }
  },
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: "https://use.typekit.net/inu5pui.css" }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'banshee-ui/docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          }
        ],
        sidebar: {
          '/guide/': [{
            title: 'Guide',
            collapsable: false,
            children: [
              '',
              'getting-started'
            ]
          }]
        }
      }
    }
  }
}
