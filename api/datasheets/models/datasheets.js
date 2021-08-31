const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.sku) {
        data.slug = slugify(data.sku, { lower: true });
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.sku) {
        data.slug = slugify(data.sku, { lower: true });
      }
    },
  },
};
