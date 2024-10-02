import { mainContainer } from "../MainContainer/MainContainer.js";

export function learnMore() {
  buildLearnMore();
}

export function Historie() {
  buildHistorie();
}

export function gallery() {
  buildGallery();
}

export function darkforest() {
  buildDarkforest();
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
      id="gallery-image1"

    />
    <img
      src="assets/images/Uploads/sword.jpg"
      alt="ancient sword on display"
      class="gallery-image hiddenleft"
      id="gallery-image2"

    />
    <img
      src="assets/images/Uploads/skeleton.jpeg"
      alt="skeleton in armor"
      class="gallery-image hiddenleft"
      id="gallery-image3"

    />
    <img
      src="assets/images/Uploads/dragonfight.jpg"
      alt="battle with a dragon"
      class="gallery-image hiddenleft"
      id="gallery-image4"
    />
  </div>
    </div>
  `;
  mainContainer.innerHTML += myHtml;
}

function buildDarkforest() {
  const myHtml = `
    <section class="darkforest-section hiddenfadein">
      <img src="assets/images/Uploads/dark forest.jpg" alt="Dark Forest" class="darkforest-image" />
      <article class="darkforest-article">
        <h2 class="darkforest-title">Dark Forest: En Historie om en Kæmpe Mod Mørkets Væsner</h2>
    <p class="darkforest-description">
      I "Darkforest" følger vi en tapper knight, der må kæmpe for overlevelse i en forbandet, mørklagt skov fyldt med dæmoniske væsner. Den mørke skov strækker sig uendeligt og er hjemsted for skygger, der hvisker ondskabens navn, og uhyrer, der lurer i skovens tætte tåge.
    </p>
    <p class="darkforest-description">
      Iført en slidt, men ærefuld rustning, kæmper knighten for at redde sit hjem fra den evige nat, som truer med at opsluge hele riget. Han må bruge både styrke og snuhed for at bekæmpe mørkets væsner og navigere gennem skovens farer.
    </p>
    <p class="darkforest-description">
      I denne kamp mod ondskaben må knighten bevare håbet, for kun hans tapre gerninger kan forhindre mørket i at sprede sig og opsluge alt lys. Han er rigets sidste håb i en verden, der langsomt falder i skygge.
    </p>      </article>
    </section>
  `;
  mainContainer.innerHTML += myHtml;
}
