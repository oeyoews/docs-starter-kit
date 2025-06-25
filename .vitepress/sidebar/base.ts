const project = 'base';

const genLink = (name: string) => {
  return `/src/${project}/${name}.md`;
};

export default [
  {
    text: '📁 开始',
    collapsed: false, // 默认折叠
    items: [{ text: '📄 介绍', link: genLink('index') }],
  },
  //   {
  //     items: [{ text: '❓ FAQ', link: '/src/project-01/faq.md' }],
  //   },
];
