import config from "@/config.json";
import searchIndex from "../../public/searchIndex.json";
import moment from "moment";
import _ from "lodash";
// eslint-disable-next-line no-unused-vars
import tz from "moment-timezone";

const now = moment()
  .tz("America/Chicago")
  .format("YYYY-MM-DD");

console.log(now);

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

const newsContext = require.context(
  "../../public/markdown/news/",
  true,
  /\.md$/
);
const newsItems = newsContext.keys().map(key => ({
  ...newsContext(key),
  path: `/news/${key.replace(".md", "").replace("./", "")}`
}));
//console.log(funding);
let news = newsItems.filter(item => {
  if (item.path.indexOf("placeholder") === -1) {
    return item;
  }
});

news = _.sortBy(news, "attributes.posted").reverse();

let colors = {
  blue: ["#103f7c", "#103f7c"],

  red: ["#630308", "#630308"]
};

//console.log(funding);

let myApp = {
  now,
  config,
  searchIndex,
  computedPublicPath,
  siteMeta,
  funding,
  news,
  colors
};

export { myApp };
