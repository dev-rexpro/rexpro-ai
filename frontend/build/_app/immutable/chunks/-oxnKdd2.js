import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, o as onMount, A as tick, k as get, aV as mutate, a_ as remove_textarea_child, w as set, t as template_effect, y as event, a as append, b as pop, q as mutable_source, f as from_html } from "./B-Kw_l3V.js";
import { s as set_attribute, a as set_class, c as clsx } from "./B9yCN616.js";
import { b as bind_value } from "./CgeA63xA.js";
import { b as bind_this } from "./BSYzg88z.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
var root = from_html(`<textarea style="field-sizing: content;"></textarea>`);
function Textarea($$anchor, $$props) {
  push($$props, false);
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 8, "");
  let rows = prop($$props, "rows", 8, 1);
  let minSize = prop($$props, "minSize", 8, null);
  let maxSize = prop($$props, "maxSize", 8, null);
  let required = prop($$props, "required", 8, false);
  let readonly = prop($$props, "readonly", 8, false);
  let className = prop($$props, "className", 8, "w-full rounded-lg px-3.5 py-2 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden  h-full");
  let ariaLabel = prop($$props, "ariaLabel", 8, null);
  let onInput = prop($$props, "onInput", 8, () => {
  });
  let onBlur = prop($$props, "onBlur", 8, () => {
  });
  let textareaElement = mutable_source();
  onMount(async () => {
    await tick();
    resize();
    requestAnimationFrame(() => {
      const interval = setInterval(
        () => {
          if (get(textareaElement)) {
            clearInterval(interval);
            resize();
          }
        },
        100
      );
    });
  });
  const resize = () => {
    if (get(textareaElement)) {
      let activeScrollParents = [];
      let p = get(textareaElement).parentNode;
      while (p && p !== document.body) {
        if (p instanceof HTMLElement && p.scrollTop > 0) {
          activeScrollParents.push({ el: p, top: p.scrollTop });
        }
        p = p.parentNode;
      }
      const windowScrollY = window.scrollY;
      mutate(textareaElement, get(textareaElement).style.height = "");
      let height = get(textareaElement).scrollHeight;
      if (maxSize() && height > maxSize()) {
        height = maxSize();
      }
      if (minSize() && height < minSize()) {
        height = minSize();
      }
      mutate(textareaElement, get(textareaElement).style.height = `${height}px`);
      activeScrollParents.forEach((p2) => {
        if (p2.el.scrollTop !== p2.top) p2.el.scrollTop = p2.top;
      });
      if (window.scrollY !== windowScrollY) {
        window.scrollTo(window.scrollX, windowScrollY);
      }
    }
  };
  init();
  var textarea = root();
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(textareaElement, $$value), () => get(textareaElement));
  template_effect(() => {
    set_attribute(textarea, "placeholder", placeholder());
    set_attribute(textarea, "aria-label", ariaLabel() || placeholder());
    set_class(textarea, 1, clsx(className()));
    set_attribute(textarea, "rows", rows());
    textarea.required = required();
    textarea.readOnly = readonly();
  });
  bind_value(textarea, value);
  event("input", textarea, (e) => {
    resize();
    onInput()(e);
  });
  event("focus", textarea, () => {
    resize();
  });
  event("blur", textarea, function(...$$args) {
    var _a;
    (_a = onBlur()) == null ? void 0 : _a.apply(this, $$args);
  });
  append($$anchor, textarea);
  pop();
}
export {
  Textarea as T
};
