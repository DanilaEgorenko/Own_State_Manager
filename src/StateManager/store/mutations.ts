export default {
  addItem(state: any, payload: any) {
    state.items.push(payload);
    return state;
  },
  clearItem(state: any, payload: any) {
    state.items.splice(payload.i, 1);
    return state;
  }
};