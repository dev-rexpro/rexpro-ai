import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, i as getContext, k as get, w as set, c as child, r as reset, t as template_effect, d as set_text, m as deep_read_state, u as untrack, a as append, h as first_child, z as sibling, x as derived_safe_equal, b as pop, e as store_get, s as setup_stores, q as mutable_source, f as from_html } from "./B-Kw_l3V.js";
import { a as set_class, c as clsx } from "./B9yCN616.js";
import { b as bind_this } from "./BSYzg88z.js";
import { i as init } from "./CUpGYt-B.js";
import { p as prop } from "./COqmMDwI.js";
import { S as Select } from "./B-wfBoQj.js";
import { C as ChevronDown } from "./BAfBE24n.js";
var root = from_html(` <!>`, 1);
var root_1 = from_html(`<span> </span>`);
function DropdownOptions($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let align = prop($$props, "align", 8, "center");
  let className = prop($$props, "className", 8, "");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 8, "Select an option");
  let items = prop($$props, "items", 24, () => [
    { value: "new", label: $i18n().t("New") },
    { value: "top", label: $i18n().t("Top") }
  ]);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let selectComponent = mutable_source();
  let open = mutable_source(false);
  init();
  {
    let $0 = derived_safe_equal(() => className() ? className() : "flex shrink-0 items-center gap-2 bg-transparent px-0.5 text-sm placeholder-gray-400 outline-hidden focus:outline-hidden");
    bind_this(
      Select($$anchor, {
        get items() {
          return items();
        },
        get placeholder() {
          return placeholder();
        },
        get align() {
          return align();
        },
        get triggerClass() {
          return get($0);
        },
        itemClass: "flex w-full gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
        onChange: (v) => {
          onChange()(v);
        },
        get value() {
          return value();
        },
        set value($$value) {
          value($$value);
        },
        get open() {
          return get(open);
        },
        set open($$value) {
          set(open, $$value);
        },
        $$slots: {
          trigger: ($$anchor2, $$slotProps) => {
            const selectedLabel = derived_safe_equal(() => $$slotProps.selectedLabel);
            var fragment_1 = root();
            var text = first_child(fragment_1);
            var node = sibling(text);
            ChevronDown(node, { className: " size-3", strokeWidth: "2.5" });
            template_effect(() => set_text(text, `${get(selectedLabel) ?? ""} `));
            append($$anchor2, fragment_1);
          },
          item: ($$anchor2, $$slotProps) => {
            const item = derived_safe_equal(() => $$slotProps.item);
            const selected = derived_safe_equal(() => $$slotProps.selected);
            var span = root_1();
            var text_1 = child(span, true);
            reset(span);
            template_effect(() => {
              set_class(span, 1, clsx(get(selected) ? "" : "text-gray-500 dark:text-gray-400"));
              set_text(text_1, (deep_read_state(get(item)), untrack(() => get(item).label)));
            });
            append($$anchor2, span);
          }
        },
        $$legacy: true
      }),
      ($$value) => set(selectComponent, $$value),
      () => get(selectComponent)
    );
  }
  pop();
  $$cleanup();
}
export {
  DropdownOptions as D
};
