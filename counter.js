import {
  html,
  useSignal,
  component,
} from "esor";

component("my-counter", (props) => {
  const [count, setCount] = useSignal(Number(props.count) || 0);
  return html`
    <div>
      <p>count is ${count}</p>
      <button @click="${() => setCount(count + 1)}">Increment</button>
    </div>
  `; 
});
