import store from "../../StateManager/index";

export default function List() {
  const handleClick = (i: number) => {
    store['dispatch']('clearItem', { i });
  }
  return (
    <div className="list">
      {!store.state.items.length && <p className="no-items">Ничего нет ✅</p>}
      <ul className="items">
        {store.state.items.map((item: string, i: number) => {
          return <li key={item}>{item}<button aria-label="❌" onClick={() => handleClick(i)}>❌</button></li>
        })}
      </ul>
    </div>
  )
}