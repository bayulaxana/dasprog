module.exports = {
  title: 'Dasar Pemrograman',
  tagline: 'Belajar bersama',
  url: 'https://bayulaxana.github.io',
  baseUrl: '/dasprog/',
  onBrokenLinks: 'throw',
  favicon: 'img/c-logo.ico',
  organizationName: 'bayulaxana', // Usually your GitHub org/user name.
  projectName: 'dasprog', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Dasar Pemrograman',
      logo: {
        alt: 'Logo',
        src: 'img/c-logo.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Modul',
          position: 'left',
        },
        {to: 'blog', label: 'Pengumuman', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Assets',
          items: [
            {
              label: 'C Programming Icons by Icons8',
              href: 'https://icons8.com/icon/40670/c-programming'
            }
          ]
        }
      ],
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Teknik Informatika Institut Teknologi Sepuluh Nopember`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          routeBasePath: '/',
          homePageId: 'intro/contoh_program',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
