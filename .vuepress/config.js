module.exports = {
  title: 'Banshee',
  description: 'A  renderless UI component and utility library for Vue.',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: "https://use.typekit.net/inu5pui.css" }]
  ],
  themeConfig: {
    repo: 'banshee-ui/docs',
    editLinks: true,
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/getting-started'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/carousel',
          '/components/error-boundary',
          '/components/expandable',
          '/components/fetch',
          '/components/listbox',
          '/components/mediaquery',
          '/components/simplelist',
          '/components/smartlist',
          '/components/storage',
          '/components/tabs',
          '/components/toggle',
        ]
      }
    ],
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated'
  }
}
