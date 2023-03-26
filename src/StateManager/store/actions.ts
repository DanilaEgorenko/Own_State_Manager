export default {
  addItem(context: any, payload: any) {
    context.commit('addItem', payload);
  },
  clearItem(context: any, payload: any) {
    context.commit('clearItem', payload);
  }
};