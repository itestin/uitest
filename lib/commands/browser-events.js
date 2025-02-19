'use strict';

module.exports = {
  keyboard: async (context, type, key, opt) => {
    const { page } = context;
    if (page.keyboard[type]) {
      await page.keyboard[type](key, opt);
    }
    return true;
  },
  mouse: async (context, type, x, y, opt) => {
    const { page } = context;
    if (page.mouse[type]) {
      await page.mouse[type](x, y, opt);
    }
    return true;
  }
};
