import { helper } from '@ember/component/helper';

export function typeOf(params/*, hash*/) {
  return typeof(params[0]);
}

export default helper(typeOf);
