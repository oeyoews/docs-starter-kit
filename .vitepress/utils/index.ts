export const generateNavs = (routes) => {
  return routes.map((route) => {
    return {
      text: route.text,
      link: route.link,
      activeMatch: route.link,
    };
  });
};
