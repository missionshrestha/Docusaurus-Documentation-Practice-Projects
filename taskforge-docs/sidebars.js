// @ts-check


/**
 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'quickstart',
      label: 'Quickstart',
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/creating-projects',
        'guides/managing-tasks',
        'guides/cli-usage',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/api-overview',
        'reference/config-file',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: false,
      items: [
        'advanced/troubleshooting',
        'advanced/faq',
      ],
    },

  ],
};

export default sidebars;
