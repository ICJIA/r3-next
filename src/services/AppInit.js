import config from "@/config.json";
import searchIndex from "../../public/searchIndex.json";

const computedPublicPath =
  process.env.NODE_ENV === `production` ? config.publicPath : "";

function getSection(key) {
  let root = key.split("/");
  const isRoot = /^.*\.(md)$/i.test(root[1]);
  if (isRoot) {
    return "/";
  } else {
    return `/${root[1]}`;
  }
}
const context = require.context("../../public/markdown", true, /\.md$/);
const siteMeta = context.keys().map(key => ({
  ...context(key),
  path: `/${key.replace(".md", "").replace("./", "")}`,
  root: `${getSection(key)}`
}));

const fundingContext = require.context(
  "../../public/markdown/funding/",
  true,
  /\.md$/
);
const fundingItems = fundingContext.keys().map(key => ({
  ...fundingContext(key),
  path: `/funding/${key.replace(".md", "").replace("./", "")}`
}));
//console.log(funding);
let funding = fundingItems.filter(item => {
  if (item.path.indexOf("placeholder") === -1) {
    return item;
  }
});

let colors = {
  blue: ["#0433BF", "#0442BF", "#0455BF", "#033E8C"],
  pink: ["#D81B60", "#C2185B", "#AD1457", "#880E4F"],
  red: ["#c92830", "#b71419", "#A3050D", "#630308"]
};

/* Color Theme Swatches in Hex */
// .Corcodus-1-hex { color: #0433BF; }
// .Corcodus-2-hex { color: #0442BF; }
// .Corcodus-3-hex { color: #0455BF; }
// .Corcodus-4-hex { color: #033E8C; }
// .Corcodus-5-hex { color: #260101; }

/* Color Theme Swatches in Hex */
// .Red-CMYK-1-hex { color: #F00713; }
// .Red-CMYK-2-hex { color: #E30712; }
// .Red-CMYK-3-hex { color: #C90610; }
// .Red-CMYK-4-hex { color: #A3050D; }
// .Red-CMYK-5-hex { color: #630308; }

//console.log(funding);

let myApp = {
  config,
  searchIndex,
  computedPublicPath,
  siteMeta,
  funding,
  colors
};

export { myApp };
