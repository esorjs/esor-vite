import style from "./index.css?raw";
import { component, html, signal } from "esor";

  component("my-counter", () => {
    const count = signal(0);

    return html`
      <div class="card">
        <button @click=${() => count(count() + 1)}>Count is: ${count}</button>
      </div>

      <style>
        ${style}
      </style>
    `;
  });
