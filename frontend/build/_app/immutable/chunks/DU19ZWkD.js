import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, h as first_child, z as sibling, c as child, r as reset, t as template_effect, d as set_text, m as deep_read_state, k as get, u as untrack, a as append, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, f as from_html } from "./B-Kw_l3V.js";
import { a as set_class } from "./B9yCN616.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { C as ChevronDown } from "./BAfBE24n.js";
import { C as Check } from "./CmzI29Zf.js";
import { S as Select } from "./B-wfBoQj.js";
var root = from_html(`<span class="inline-flex h-input px-0.5 w-full outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden"> </span> <!>`, 1);
var root_1 = from_html(` <div><!></div>`, 1);
function ViewSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Select view"));
  let onChange = prop($$props, "onChange", 8, () => {
  });
  const items = [
    { value: "", label: $i18n().t("All") },
    { value: "created", label: $i18n().t("Created by you") },
    { value: "shared", label: $i18n().t("Shared with you") }
  ];
  init();
  Select($$anchor, {
    get items() {
      return items;
    },
    get placeholder() {
      return placeholder();
    },
    triggerClass: "relative w-full flex items-center gap-0.5 px-2.5 py-1.5 bg-gray-50 dark:bg-gray-850 rounded-xl ",
    labelClass: "inline-flex h-input px-0.5 w-full outline-hidden bg-transparent truncate  placeholder-gray-400  focus:outline-hidden",
    onChange: () => onChange()(value()),
    get value() {
      return value();
    },
    set value($$value) {
      value($$value);
    },
    $$slots: {
      trigger: ($$anchor2, $$slotProps) => {
        const selectedLabel = derived_safe_equal(() => $$slotProps.selectedLabel);
        var fragment_1 = root();
        var span = first_child(fragment_1);
        var text = child(span, true);
        reset(span);
        var node = sibling(span, 2);
        ChevronDown(node, { className: " size-3.5", strokeWidth: "2.5" });
        template_effect(() => set_text(text, get(selectedLabel)));
        append($$anchor2, fragment_1);
      },
      item: ($$anchor2, $$slotProps) => {
        const item = derived_safe_equal(() => $$slotProps.item);
        const selected = derived_safe_equal(() => $$slotProps.selected);
        var fragment_2 = root_1();
        var text_1 = first_child(fragment_2);
        var div = sibling(text_1);
        var node_1 = child(div);
        Check(node_1, {});
        reset(div);
        template_effect(() => {
          set_text(text_1, `${(deep_read_state(get(item)), untrack(() => get(item).label)) ?? ""} `);
          set_class(div, 1, `ml-auto ${get(selected) ? "" : "invisible"}`);
        });
        append($$anchor2, fragment_2);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  ViewSelector as V
};
