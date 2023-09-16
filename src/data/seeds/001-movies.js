const { tables } = require("../db-config");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tables.movies).del();
  await knex(tables.movies).insert([
    {
      title: "A Bronx Tale",
      public_id: "1607",
      year: "1993",
      poster:
        "https://image.tmdb.org/t/p/w185//sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg",
      type: "movie",
    },
    {
      title: "Ghosted",
      public_id: "868759",
      year: "2023",
      poster:
        "https://image.tmdb.org/t/p/w185//liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
      type: "movie",
    },
  ]);
};
