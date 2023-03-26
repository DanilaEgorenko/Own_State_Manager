import { IStore } from "../store";

export interface IActions {
  addItem(context: IStore, payload: string): void
  clearItem(context: IStore, payload: { i: number }): void
}

export default {
  addItem(context: IStore, payload: string): void {
    context.commit('addItem', payload);
  },
  clearItem(context: IStore, payload: { i: number }): void {
    context.commit('clearItem', payload);
  }
};