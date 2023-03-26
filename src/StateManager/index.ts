import Store from './store.js';
import actions from './store/actions';
import mutations from './store/mutations';
import state from './store/state';

export default new Store({
  actions,
  mutations,
  state
});