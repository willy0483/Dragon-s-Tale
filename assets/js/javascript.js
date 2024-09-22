// #region Main Container Setup
const mainContainer = document.createElement("section");
mainContainer.classList.add("main-container");
mainContainer.id = "main-container";

buildMain();
document.body.appendChild(mainContainer);
// #endregion

// #region Build Main Section
function buildMain() {
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
                En kæmpe kæmper for at overleve mod en hær af drager i et mysterisk farvestrålende hav.
              </p>
              <button class="learn-more-btn" onclick="buildView()">Lære mere</button>
              <button class="share-btn" onclick="share()">Del</button>
            </figcaption>
          </figure>
        `;
  scrolltop();

  container.innerHTML = myHtml;
  document.body.appendChild(container);
}
// #endregion

// #region View Management
function buildView() {
  resetView();
  learnMore();
  Historie();
}

function resetView() {
  mainContainer.innerHTML = "";
}
// #endregion

// #region Learning and Story Sections
function learnMore() {
  buildLearnMore();
}

function Historie() {
  buildHistorie();
}

function buildLearnMore() {
  const myHtml = `
<div class="dragon-container">
  <img
    src="assets/images/Uploads/sr2c37871d0a495.webp"
    alt="dragon"
    class="dragon-image-learn-more"
  />
  <div class="dragon-content">
    <section class="learn-more-section">
      <h2 class="learn-more-title">
        Dragon's Tale: En historie om en kæmpe mod drager
      </h2>
      <article class="learn-more-article">
        <p>
          I "Dragon's Tale" følger vi en tapper knight, der står over for den
          frygtelige trussel fra en horde af drager. I sit rige, som er fyldt
          med magi og mystik, er han klædt i rustning som en Tempelridder, klar
          til at forsvare sit folk. Hans mod og ære driver ham til at kæmpe mod
          det onde og bevare freden i landet.
        </p>
      </article>
    </section>
  </div>
</div>
    `;

  mainContainer.innerHTML += myHtml;
}

function buildHistorie() {
  const myHtml = `
        <section class="knight-section">
        <article class="knight-article">
          <h2 class="knight-title">Knight</h2>
          <p class="knight-description">
            I "Dragon's Tale" er en knight en tapper kriger, der beskytter sit
            rige mod truslen fra dragerne. Iført den karakteristiske rustning fra
            Tempelridderne, kæmper han mod det onde for at bevare fred og
            sikkerhed i sit land.
          </p>
          <p class="knight-description">
            Knights er kendt for deres mod, ære og dygtighed i kamp. De er de mest
            respekterede beskyttere af kongeriget og står ofte over for store
            udfordringer i deres søgen efter retfærdighed.
          </p>
          <p class="knight-description">
            I slaget mod dragerne bruger knights ikke kun deres styrke, men også
            deres snedighed og strategiske tænkning. De kæmper tappert for at
            redde deres folk fra fare og for at sikre, at legenderne om deres
            heroiske gerninger vil leve videre.
          </p>
        </article>
        <img
          src="assets/images/Uploads/cba1cffcdf4e4c9ea6ec9861d41dbabb.jpg"
          alt="Knight"
          class="knight-image"
        />
      </section>
    `;

  mainContainer.innerHTML += myHtml;
}
// #endregion

// #region Scroll to Top Button
function scrolltop() {
  const TopDiv = document.createElement("div");
  TopDiv.classList.add("top-button-container");
  TopDiv.innerHTML = `
        <button onclick="window.scrollTo(0, 0)">
          <img src="assets/images/Svg/download.svg" alt="back to top" />
        </button>
      `;
  document.body.appendChild(TopDiv);
}
// #endregion
