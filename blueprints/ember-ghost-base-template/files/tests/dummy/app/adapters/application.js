import ApplicationAdapter from 'ember-ghost/adapters/application';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default ApplicationAdapter.extend(AdapterFetch, {});
