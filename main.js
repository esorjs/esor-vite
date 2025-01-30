import "./style.css";
import viteLogo from "/vite.svg";
import esorLogo from "/esor.svg";
import "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/esorjs/esor" target="_blank">
      <img src="${esorLogo}" class="logo esor" alt="Esor logo" />
    </a>
    
    <my-counter count="2" ></my-counter>     
  </div>
`;

