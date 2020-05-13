// import { EventBus } from "@/event-bus";
// const config = require("@/config.json");

const getCensusData = async () =>
  await import(`../../public/downloads/EligibleAreasCensusTracts.json`).then(
    m => m.default || m
  );

const getPlaceholderData = async () =>
  await import(`../../public/downloads/placeholder.json`).then(
    m => m.default || m
  );

export { getCensusData, getPlaceholderData };
