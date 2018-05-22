module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Banshee',
      description: 'A  renderless UI component and utility library for Vue.'
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: "https://use.typekit.net/inu5pui.css" }]
  ],
  themeConfig: {
    sidebar: {
      '/docs/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            'introduction/what-is-banshee'
          ]
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            'getting-started/installation'
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            'components/test-component'
          ]
        },
        {
          title: 'Recipes',
          collapsable: false,
          children: []
        }
      ]
    }
  }
}
