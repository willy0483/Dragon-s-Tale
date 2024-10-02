// ViewManagement.js
import { resetView, getElements } from "../ViewUtils/ViewUtils.js";
import {
  learnMore,
  Historie,
  gallery,
  darkforest,
} from "../StorySections/StorySections.js";

export function buildView() {
  resetView();
  learnMore();
  Historie();
  gallery();
  darkforest();

  getElements();
}
