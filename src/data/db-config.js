const knex = require("knex");
const config = require("../../knexfile");

const db = knex(config.development);

const tables = Object.freeze({
  users: "users",
  series: "series",
  movies: "movies",
  watch_history: "watch_history",
  watch_history_details: "watch_history_details",
  watch_history_details_tags: "watch_history_details_tags",
  tags: "tags",
});

module.exports = {
  db,
  tables,
};
