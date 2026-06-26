import { c as createFlowDiagram, s as styles_default } from "./DvjOXlfB.js";
import { _ as __name } from "./DQxPuqmE.js";
import "./CnZe0eLb.js";
import "./BeGenu0j.js";
var getStyles = /* @__PURE__ */ __name((options) => `${styles_default(options)}
  .swimlane.cluster rect {
    stroke: ${options.clusterBorder} !important;
  }
  [data-look="neo"].cluster rect {
    filter: none;
  }
`, "getStyles");
var styles_default2 = getStyles;
var diagram = createFlowDiagram({ defaultLayout: "swimlane", styles: styles_default2 });
export {
  diagram
};
