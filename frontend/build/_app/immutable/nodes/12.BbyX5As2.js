import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop } from "../chunks/B-Kw_l3V.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/BLfIdBii.js";
import { E as Evaluations } from "../chunks/CzIwUOf5.js";
function _page($$anchor, $$props) {
  push($$props, false);
  onMount(() => {
    goto("/admin/evaluations/leaderboard");
  });
  init();
  Evaluations($$anchor, {});
  pop();
}
export {
  _page as component
};
