export default class Control {
  events: any;
  constructor() {
    this.events = {};
  }

  subscribe(event: any, callback: any) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }
    return this.events[event].push(callback);
  }

  publish(event: any, data: any = {}) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }
    return this.events[event].map((callback: any) => callback(data));
  }
}