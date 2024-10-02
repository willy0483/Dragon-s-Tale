import { mainContainer } from "../MainContainer/MainContainer.js";

export function resetView() {
  mainContainer.innerHTML = "";
}

export function getElements() {
  const newHiddenElements = mainContainer.querySelectorAll(".hiddenrigth");
  newHiddenElements.forEach((el) => observer.observe(el));

  const newHiddenElementsLeft = mainContainer.querySelectorAll(".hiddenleft");
  newHiddenElementsLeft.forEach((el) => observer.observe(el));

  const newHiddenElementsFadeIn =
    mainContainer.querySelectorAll(".hiddenfadein");
  newHiddenElementsFadeIn.forEach((el) => observer.observe(el));
}

export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
