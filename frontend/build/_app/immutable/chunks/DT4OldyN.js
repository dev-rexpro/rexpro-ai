import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, a as append, B as from_svg } from "./B-Kw_l3V.js";
import { s as set_attribute, a as set_class, c as clsx } from "./B9yCN616.js";
import { p as prop } from "./COqmMDwI.js";
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>`);
function Minus($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
export {
  Minus as M
};
