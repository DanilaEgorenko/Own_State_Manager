import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Status from "./components/Status/Status";
import store from "./StateManager/index";

function App() {
  // эти 2 строки для принудительного ререндера компонентов (особенность React 18+)
  const [key, setKey] = useState(0)
  store.events.subscribe('stateChange', () => setKey(key => key + 1));
  return (
    <div key={key}>
      <h1>Список дел</h1>
      <List />
      <Form />
      <Status />
    </div>
  )
}

export default App
