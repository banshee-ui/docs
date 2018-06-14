module.exports = {
  title: 'Banshee',
  description: 'A  renderless UI component and utility library for Vue.',
  themeConfig: {
    repo: 'banshee-ui/banshee',
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
