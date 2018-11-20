/* eslint-env node */
module.exports = {
  description: 'The default template for ember-ghost-base-template. Used as a starting point to create your own template',
  normalizeEntityName() {
    // no-op
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        'ember-ghost',
        'ember-composable-helpers',
        'ember-data'
      ]
    })
  }
};
