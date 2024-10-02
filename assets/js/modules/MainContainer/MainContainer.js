import { buildMain } from "../BuildMain/BuildMain.js";

export const mainContainer = document.createElement("section");
mainContainer.classList.add("main-container");
mainContainer.id = "main-container";

export function setupMainContainer() {
  buildMain();
  document.body.appendChild(mainContainer);
}
