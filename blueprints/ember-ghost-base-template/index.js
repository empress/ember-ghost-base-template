/* eslint-env node */
module.exports = {
  description: 'The default template for empress-blog-base-template. Used as a starting point to create your own template',
  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        'ember-composable-helpers',
        'ember-data',
        'ember-fetch',
      ]
    })
  }
};
