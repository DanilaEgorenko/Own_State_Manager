import store from '../../StateManager/index';

export default function Status() {
  return (
    <div className='status'>
      {
        store.state.items.length ?
          <p>Нужно сделать ещё {store.state.items.length}</p> :
          <p>Всё сделано 🥰</p>
      }
    </div>
  )
}