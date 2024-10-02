export function scrolltop() {
  const TopDiv = document.createElement("div");
  TopDiv.classList.add("top-button-container");
  TopDiv.innerHTML = `
      <button>
        <img src="assets/images/Svg/download.svg" alt="back to top" />
      </button>
    `;
  document.body.appendChild(TopDiv);

  TopDiv.addEventListener("click", (e) => {
    scrollToTop();
  });
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
