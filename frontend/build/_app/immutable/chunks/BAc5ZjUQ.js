import { t as template_effect, I as hydrating, P as set_hydrate_node, aj as get_first_child, J as hydrate_next, W as active_effect, aK as assign_nodes, aL as remove_effect_dom, S as hydrate_node, ah as COMMENT_NODE, ai as get_next_sibling, aM as hydration_mismatch, aN as HYDRATION_ERROR, aO as create_element, aP as NAMESPACE_SVG, aQ as NAMESPACE_MATHML } from "./B-Kw_l3V.js";
function html(node, get_value, is_controlled = false, svg = false, mathml = false, skip_warning = false) {
  var anchor = node;
  var value = "";
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    if (hydrating) {
      anchor = set_hydrate_node(get_first_child(parent_node));
    }
  }
  template_effect(() => {
    var effect = (
      /** @type {Effect} */
      active_effect
    );
    if (value === (value = get_value() ?? "")) {
      if (hydrating) hydrate_next();
      return;
    }
    if (is_controlled && !hydrating) {
      effect.nodes = null;
      parent_node.innerHTML = /** @type {string} */
      value;
      if (value !== "") {
        assign_nodes(
          /** @type {TemplateNode} */
          get_first_child(parent_node),
          /** @type {TemplateNode} */
          parent_node.lastChild
        );
      }
      return;
    }
    if (effect.nodes !== null) {
      remove_effect_dom(
        effect.nodes.start,
        /** @type {TemplateNode} */
        effect.nodes.end
      );
      effect.nodes = null;
    }
    if (value === "") return;
    if (hydrating) {
      hydrate_node.data;
      var next = hydrate_next();
      var last = next;
      while (next !== null && (next.nodeType !== COMMENT_NODE || /** @type {Comment} */
      next.data !== "")) {
        last = next;
        next = get_next_sibling(next);
      }
      if (next === null) {
        hydration_mismatch();
        throw HYDRATION_ERROR;
      }
      assign_nodes(hydrate_node, last);
      anchor = set_hydrate_node(next);
      return;
    }
    var ns = svg ? NAMESPACE_SVG : mathml ? NAMESPACE_MATHML : void 0;
    var wrapper = (
      /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
      create_element(svg ? "svg" : mathml ? "math" : "template", ns)
    );
    wrapper.innerHTML = /** @type {any} */
    value;
    var node2 = svg || mathml ? wrapper : (
      /** @type {HTMLTemplateElement} */
      wrapper.content
    );
    assign_nodes(
      /** @type {TemplateNode} */
      get_first_child(node2),
      /** @type {TemplateNode} */
      node2.lastChild
    );
    if (svg || mathml) {
      while (get_first_child(node2)) {
        anchor.before(
          /** @type {TemplateNode} */
          get_first_child(node2)
        );
      }
    } else {
      anchor.before(node2);
    }
  });
}
export {
  html as h
};
