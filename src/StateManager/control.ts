import { IState } from "./store";

export interface IEvents {
  [key: string]: Function[];
}

export default class Control {
  events: IEvents;
  constructor() {
    this.events = {};
  }

  subscribe(event: string, callback: Function) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }
    return this.events[event].push(callback);
  }

  publish(event: string, data: IState = {
    items: []
  }) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }
    return this.events[event].map((callback: Function) => callback(data));
  }
}