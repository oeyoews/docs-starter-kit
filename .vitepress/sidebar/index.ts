import project01 from './project01';
import ai from './ai';
import base from './base';

const modules = {
  base,
  ai,
  project01,
};

export const sidebars = {};

for (const [name, loader] of Object.entries(modules)) {
  const key = `/src/${name}`;
  sidebars[key] = loader;
}
