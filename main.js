import "./style.css";
import esorLogo from "/esor.svg";
import viteLogo from "/vite.svg";
import "./counter.js";

document.querySelector("#app").innerHTML = `
    <div>
        <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/esorjs/esor" target="_blank">
        <img src="${esorLogo}" class="logo esor" alt="Esor logo" />
        </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <my-counter></my-counter>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
