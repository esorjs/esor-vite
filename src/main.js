import "./App.css";
import "./counter.js";
import esorLogo from "./assets/esor.svg";
import viteLogo from "/vite.svg";

const app = document.querySelector("#app");
const container = document.createElement("div");

const aVite = document.createElement("a");
aVite.href = "https://vite.dev";
aVite.target = "_blank";
aVite.rel = "noopener noreferrer";

const imgVite = document.createElement("img");
imgVite.src = viteLogo;
imgVite.className = "logo";
imgVite.alt = "Vite logo";
aVite.appendChild(imgVite);

const aEsor = document.createElement("a");
aEsor.href = "https://github.com/esorjs/esor";
aEsor.target = "_blank";
aEsor.rel = "noopener noreferrer";

const imgEsor = document.createElement("img");
imgEsor.src = esorLogo;
imgEsor.className = "logo esor";
imgEsor.alt = "Esor logo";
aEsor.appendChild(imgEsor);

const h1 = document.createElement("h1");
h1.textContent = "Vite + Esor";

const myCounter = document.createElement("my-counter");

const p = document.createElement("p");
p.className = "read-the-docs";
p.textContent = "Click on the Vite and Esor logos to learn more";

container.appendChild(aVite);
container.appendChild(aEsor);
container.appendChild(h1);
container.appendChild(myCounter);
container.appendChild(p);

app.appendChild(container);
