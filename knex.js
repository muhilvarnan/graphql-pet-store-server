const camelize = require("camelize");

module.exports = require("knex")({
  client: "postgresql",
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    charset: "utf8"
  },
  migrations: {
    tableName: "knex_migrations"
  },
  postProcessResponse: (result, queryContext) => {
    if (Array.isArray(result)) {
      return result.map(row => camelize(row));
    } else {
      return camelize(result);
    }
  }
});
