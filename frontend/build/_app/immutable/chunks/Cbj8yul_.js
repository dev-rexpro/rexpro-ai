import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, aS as createEventDispatcher, o as onMount, k as get, j as onDestroy, c as child, r as reset, w as set, a as append, b as pop, q as mutable_source, f as from_html } from "./B-Kw_l3V.js";
import { s as slot } from "./zXynQJya.js";
import { b as bind_this } from "./BSYzg88z.js";
import { i as init } from "./CUpGYt-B.js";
var root = from_html(`<div><!></div>`);
function Loader($$anchor, $$props) {
  push($$props, false);
  const dispatch = createEventDispatcher();
  let loaderElement = mutable_source();
  let observer;
  let intervalId;
  onMount(() => {
    observer = new IntersectionObserver(
      (entries, observer2) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalId = setInterval(
              () => {
                dispatch("visible");
              },
              100
            );
          } else {
            clearInterval(intervalId);
          }
        });
      },
      {
        root: null,
        // viewport
        rootMargin: "0px",
        threshold: 0.1
        // When 10% of the loader is visible
      }
    );
    observer.observe(get(loaderElement));
  });
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  init();
  var div = root();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => set(loaderElement, $$value), () => get(loaderElement));
  append($$anchor, div);
  pop();
}
export {
  Loader as L
};
