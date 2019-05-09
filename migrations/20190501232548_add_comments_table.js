exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", function(table) {
    table.increments("id").primary();
    table.string("breed_id");
    table.text("comment");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dcropTableIfExists("comments");
};
