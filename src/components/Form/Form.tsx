import { useRef } from "react";
import store from '../../StateManager/index';

export default function Form() {
  const ref: React.RefObject<HTMLInputElement> = useRef(null);
  const handleForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const value = ref.current?.value.trim();
    if (value?.length) {
      store.dispatch('addItem', value);
      if (ref.current) ref.current.value = '';
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