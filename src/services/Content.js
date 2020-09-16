// import { EventBus } from "@/event-bus";
// const config = require("@/config.json");

const axios = require("axios");

const api = axios.create({
  timeout: 10000
});

async function queryResearchHub(query) {
  let content = await api({
    url: "https://researchhub.icjia-api.cloud/graphql",
    method: "post",
    data: {
      query
    }
  });
  return content;
}

const getRecentR3ArticlesQuery = () => {
  return `{
    articles (sort: "date:desc", where: {status: "published", tags: "r3"}) {
      title
      slug
      external
      date
      splash
      categories
      tags
      abstract
      authors
      thumbnail
    }
  }`;
};

const getRecentR3Articles = async () => {
  try {
    let articles = await queryResearchHub(getRecentR3ArticlesQuery());
    console.log(articles.data.data.articles);
    return articles.data.data.articles;
  } catch (e) {
    console.log("contentServiceError", e.toString());
    return [];
  }
};

const getCensusData = async () =>
  await import(`../../public/downloads/EligibleAreasCensusTracts.json`).then(
    m => m.default || m
  );

const getPlaceholderData = async () =>
  await import(`../../public/downloads/placeholder.json`).then(
    m => m.default || m
  );

export { getCensusData, getPlaceholderData, getRecentR3Articles };
