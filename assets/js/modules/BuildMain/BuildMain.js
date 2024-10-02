import { scrolltop } from "../ScrollToTop/ScrollToTop.js";
import { buildView } from "../ViewManagement/ViewManagement.js";

export function buildMain() {
  const container = document.createElement("section");
  const myHtml = `
      <figure class="dragon-tale-figure">
        <div class="item">
          <div class="img-wrap">
            <img 
              src="assets/images/Uploads/pixil-layer-Background.png" 
              alt="Pixel art of a dragon" 
              class="dragon-image-main"
            />
          </div>
        </div>
        <figcaption class="dragon-caption">
          <h1 class="dragon-title">Dragon's Tale</h1>
          <p class="dragon-description">
            En knight kæmper for at overleve mod en hær af drager i magiske, farverige skove og bjerge.
          </p>
          <button id="learn-more-btn" class="learn-more-btn"">Lære mere</button>
          <button class="share-btn">Del</button>
        </figcaption>
      </figure>
    `;
  scrolltop();
  container.innerHTML = myHtml;
  document.body.appendChild(container);

  const learnMoreBtn = document.getElementById("learn-more-btn");
  learnMoreBtn.addEventListener("click", (e) => {
    buildView();
  });
}
