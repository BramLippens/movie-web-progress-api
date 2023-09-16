const { tables } = require("../db-config");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tables.movies, (table) => {
    table.increments("_id");
    table.string("title").notNullable();
    table.string("public_id").notNullable();
    table.string("year").notNullable();
    table.string("poster").notNullable();
    table.string("type").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTableIfExists(tables.movies);
};
