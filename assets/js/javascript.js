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
              En knight kæmper for at overleve mod en hær af drager i magiske, farverige skove og bjerge.
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
  gallery();

  getElements();
}

function getElements() {
  const newHiddenElements = mainContainer.querySelectorAll(".hiddenrigth");
  newHiddenElements.forEach((el) => observer.observe(el));

  const newHiddenElementsleft = mainContainer.querySelectorAll(".hiddenleft");
  newHiddenElementsleft.forEach((el) => observer.observe(el));
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

function gallery() {
  buildGallery();
}

function buildLearnMore() {
  const myHtml = `
    <div class="dragon-container hiddenleft">
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
              I "Dragon's Tale" følger vi en tapper knight, der kæmper for at
              overleve mod en horde af drager i magiske, farverige skove og
              bjerge. Klædt i rustning som en Tempelridder, er han klar til at
              forsvare sit folk. Hans mod og ære driver ham til at bekæmpe det
              onde og bevare freden i sit rige, der er fyldt med magi og mystik.
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
        <section class="knight-section hiddenrigth">
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
          src="assets/images/Uploads/knight.jpg"
          alt="Knight"
          class="knight-image"
        />
      </section>
    `;
  mainContainer.innerHTML += myHtml;
}

function buildGallery() {
  const myHtml = `
<div class="gallery-container">
  <div class="image-container">
    <img
      src="assets/images/Uploads/wizard.jpg"
      alt="wizard casting a spell"
      class="gallery-image hiddenleft"
    />
    <img
      src="assets/images/Uploads/sword.jpg"
      alt="ancient sword on display"
      class="gallery-image hiddenleft"
    />
    <img
      src="assets/images/Uploads/skeleton.jpeg"
      alt="skeleton in armor"
      class="gallery-image hiddenleft"
    />
    <img
      src="assets/images/Uploads/dragonfight.jpg"
      alt="battle with a dragon"
      class="gallery-image hiddenleft"
    />
  </div>
</div>
`;
  mainContainer.innerHTML += myHtml;
}

// #endregion

// #region Scroll to Top Button
function scrolltop() {
  const TopDiv = document.createElement("div");
  TopDiv.classList.add("top-button-container");
  TopDiv.innerHTML = `
        <button onclick="scrollToTop()">
          <img src="assets/images/Svg/download.svg" alt="back to top" />
        </button>
      `;
  document.body.appendChild(TopDiv);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// #endregion

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(
      "Observed element:",
      entry.target,
      "Is intersecting:",
      entry.isIntersecting
    ); // Debugging log
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else { // Uncomment this block to remove the class when the element is not intersecting
    //   entry.target.classList.remove("show");
    // }
  });
});
