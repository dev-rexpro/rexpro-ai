import { aY as teardown, _ as get_descriptor } from "./B-Kw_l3V.js";
function bind_prop(props, prop, value) {
  var desc = get_descriptor(props, prop);
  if (desc && desc.set) {
    props[prop] = value;
    teardown(() => {
      props[prop] = null;
    });
  }
}
export {
  bind_prop as b
};
