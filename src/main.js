import "./App.css";
import "./counter.js";
import esorLogo from "/esor.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://github.com/esorjs/esor" target="_blank">
        <img src="${esorLogo}" class="logo esor" alt="Esor logo" />
      </a>
      <h1>Vite + Esor</h1>
       <my-counter></my-counter>
      <p class="read-the-docs">
        Click on the Vite and Esor logos to learn more
      </p>
    </div>
`;
