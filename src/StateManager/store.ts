import Control from "./control";
import state from "./store/state";

export interface IState {
  items: string[];
}

export default class Store {
  actions: any;
  mutations: any;
  state: IState;
  status: string;
  events: Control;
  constructor(params: any) {
    this.actions = {};
    this.mutations = {};
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
      set: function (state, key, value) {
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
  dispatch(actionKey: any, payload: any) {
    if (typeof this.actions[actionKey] !== 'function') {
      console.error(`Экшна "${actionKey} не существует`);
      return false;
    }
    console.log(`ACTION: ${actionKey}`);
    this.status = 'action';
    this.actions[actionKey](this, payload);
    return true;
  }
  commit(mutationKey: any, payload: any) {
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
