const project = 'project01';

const genLink = (name: string) => {
  return `/src/${project}/${name}`;
};

export default [
  {
    text: '开始',
    items: [
      { text: 'Project02 Docs', link: genLink('index') },
      { text: 'Project02 Docs', link: genLink('02') },
    ],
  },
];
