import Control from "./control";
import { IActions } from "./store/actions";
import { IMutations } from "./store/mutations";
import state from "./store/state";

export interface IState {
  [key: string]: string[];
}

export interface IParams {
  actions: IActions;
  mutations: IMutations;
  state: IState;
}

export type TPayload = string & { i: number }


export interface IStore {
  actions: IActions;
  mutations: IMutations;
  state: IState;
  status: string;
  events: Control;
  dispatch(actionKey: keyof IActions, payload: TPayload): boolean
  commit(mutationKey: keyof IMutations, payload: TPayload): boolean
}

export default class Store implements IStore {
  actions: IActions;
  mutations: IMutations;
  state: IState;
  status: string;
  events: Control;
  constructor(params: IParams) {
    this.actions = {} as IActions;
    this.mutations = {} as IMutations;
    this.state = state;
    this.status = 'resting';
    this.events = new Control();

    if (params.hasOwnProperty('actions')) {
      this.actions = params.actions;
    }
    if (params.hasOwnProperty('mutations')) {
      this.mutations = params.mutations;
    }
    const self = this
    this.state = new Proxy((params.state || {}), {
      set: function (state, key: string, value) {
        state[key] = value;
        console.log(`Изменения состояния: ${key.toString()}: ${value}`);
        self.events.publish('stateChange', self.state);
        if (self.status !== 'mutation') {
          console.warn(`Используйте mutation для изменений ${key.toString()}`);
        }
        self.status = 'resting';
        return true;
      }
    });
  }
  dispatch(actionKey: keyof IActions, payload: TPayload): boolean {
    if (typeof this.actions[actionKey] !== 'function') {
      console.error(`Экшна "${actionKey} не существует`);
      return false;
    }
    console.log(`ACTION: ${actionKey}`);
    this.status = 'action';
    this.actions[actionKey](this, payload);
    return true;
  }
  commit(mutationKey: keyof IMutations, payload: TPayload): boolean {
    if (typeof this.mutations[mutationKey] !== 'function') {
      console.error(`Мутации "${mutationKey}" не существует`);
      return false;
    }
    this.status = 'mutation';
    const newState = this.mutations[mutationKey](this.state, payload);
    this.state = Object.assign(this.state, newState);
    return true;
  }
}
