import { useRef } from "react";
import store from '../../StateManager/index';

export default function Form() {
  const ref: any = useRef(null);
  const handleForm = (e: any) => {
    e.preventDefault();
    const value = ref.current?.value.trim();
    if (value?.length) {
      store.dispatch('addItem', value);
      ref.current.value = '';
      ref.current?.focus();
    }
  }
  return (
    <form action="">
      <input type="text" ref={ref} />
      <button onClick={handleForm}>Добавить</button>
    </form>
  )
}