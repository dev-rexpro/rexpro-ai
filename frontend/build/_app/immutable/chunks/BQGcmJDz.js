import { aZ as is_runes, K as block, I as hydrating, J as hydrate_next } from "./B-Kw_l3V.js";
import { B as BranchManager } from "./DWHK2A9K.js";
const NAN = Symbol("NaN");
function key(node, get_key, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var legacy = !is_runes();
  block(() => {
    var key2 = get_key();
    if (key2 !== key2) {
      key2 = /** @type {any} */
      NAN;
    }
    if (legacy && key2 !== null && typeof key2 === "object") {
      key2 = /** @type {V} */
      {};
    }
    branches.ensure(key2, render_fn);
  });
}
export {
  key as k
};
