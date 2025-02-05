import style from "./index.css?raw";
import { component, html, useSignal } from "esor";

component("my-counter", () => {
  const [count, setCount] = useSignal(0);

  return html`
    <div class="card">
      <button @click=${() => setCount(count + 1)}>Count is: ${count}</button>
    </div>

    <style>
      ${style}
    </style>
  `;
});
