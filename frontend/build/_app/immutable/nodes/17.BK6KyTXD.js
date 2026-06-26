import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as pop } from "../chunks/B-Kw_l3V.js";
import { i as init } from "../chunks/CUpGYt-B.js";
import { g as goto } from "../chunks/BQ3ZEgEF.js";
import { S as Settings } from "../chunks/DKHDPGlk.js";
function _page($$anchor, $$props) {
  push($$props, false);
  onMount(() => {
    goto("/admin/settings/general");
  });
  init();
  Settings($$anchor, {});
  pop();
}
export {
  _page as component
};
