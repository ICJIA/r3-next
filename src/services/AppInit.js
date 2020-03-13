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
  blue: ["#134c96", "#103f7c"],

  red: ["#A3050D", "#630308"]
};

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
