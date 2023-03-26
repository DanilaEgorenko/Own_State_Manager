import Component from '../component';
import store from '../index';

export default class List extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.list')
    });
  }

  render() {
    //   if (!store['state']?.items.length) {
    //     this.element.innerHTML = `<p class="no-items">Ничего нет ✅</p>`;
    //     return;
    //   }

    //   this.element.innerHTML = `
    //     <ul class="app__items">
    //     ${store['state']?.items.map((item: any) => {
    //     return `
    //         <li>${item}<button aria-label="❌">❌</button></li>
    //       `
    //   }).join('')}
    //   </ul>
    // `;

    //   this.element.querySelectorAll('button').forEach((button: any, index: any) => {
    //     button.addEventListener('click', () => {
    //       store['dispatch']('clearItem', { index });
    //     });
    //   });
  }
};