import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, a as append, B as from_svg, c as child, aR as next, r as reset } from "./B-Kw_l3V.js";
import { s as slot } from "./zXynQJya.js";
import { s as set_attribute, a as set_class, c as clsx } from "./B9yCN616.js";
import { p as prop } from "./COqmMDwI.js";
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><!><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>`);
function XMark($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-3.5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "2");
  var svg = root();
  var node = child(svg);
  slot(node, $$props, "default", {}, null);
  next();
  reset(svg);
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
export {
  XMark as X
};
