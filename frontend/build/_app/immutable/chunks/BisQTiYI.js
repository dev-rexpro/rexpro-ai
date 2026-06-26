import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as comment, h as first_child, m as deep_read_state, u as untrack, a as append, b as pop, e as store_get, s as setup_stores, t as template_effect, c as child, r as reset, d as set_text, f as from_html } from "./B-Kw_l3V.js";
import { i as if_block } from "./DWHK2A9K.js";
import { s as set_attribute, a as set_class, c as clsx } from "./B9yCN616.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { b as REXPRO_BASE_URL } from "./CGP7Xb4V.js";
import { d as shortCodesToEmojis } from "./yPwV6Diw.js";
var root = from_html(`<img loading="lazy"/>`);
var root_1 = from_html(`<div> </div>`);
function Emoji($$anchor, $$props) {
  push($$props, false);
  const $shortCodesToEmojis = () => store_get(shortCodesToEmojis, "$shortCodesToEmojis", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let shortCode = prop($$props, "shortCode", 8);
  let className = prop($$props, "className", 8, "size-4");
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var img = root();
      template_effect(
        ($0) => {
          set_attribute(img, "src", `${REXPRO_BASE_URL}/assets/emojis/${$0 ?? ""}.svg`);
          set_attribute(img, "alt", shortCode());
          set_class(img, 1, clsx(className()));
        },
        [
          () => ($shortCodesToEmojis(), deep_read_state(shortCode()), untrack(() => $shortCodesToEmojis()[shortCode()].toLowerCase()))
        ]
      );
      append($$anchor2, img);
    };
    var alternate = ($$anchor2) => {
      var div = root_1();
      var text = child(div, true);
      reset(div);
      template_effect(() => set_text(text, shortCode()));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($shortCodesToEmojis(), deep_read_state(shortCode()), untrack(() => $shortCodesToEmojis()[shortCode()])) $$render(consequent);
      else $$render(alternate, -1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Emoji as E
};
