import Store from "./store.js";

export default class Component {
  element: any;
  constructor(props: any = {}) {

    this.render = this.render || function () { };

    if (props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => this.render());
    }

    if (props.hasOwnProperty('element')) {
      this.element = props.element;
    }
  }
  render(): void {

  }
}