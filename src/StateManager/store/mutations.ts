import { IState } from "../store";

export interface IMutations {
  addItem(context: IState, payload: string): void
  clearItem(context: IState, payload: { i: number }): void
}

export default {
  addItem(state: IState, payload: string) {
    state.items.push(payload);
    return state;
  },
  clearItem(state: IState, payload: { i: number }) {
    state.items.splice(payload.i, 1);
    return state;
  }
};