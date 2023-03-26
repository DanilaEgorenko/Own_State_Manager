import Component from '../component';
import store from '../index';

export default class Status extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.status')
    });
  }

  render() {
    //this.element.innerHTML = store['state']?.items.length ? `Нужно сделать ещё ${store['state']?.items.length || 0}` : '';
  }
}