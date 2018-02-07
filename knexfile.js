require("dotenv").config();
// Update with your config settings.

module.exports = {
  development: {
    client: process.env.DB_CLIENT || "mysql",
    connection: {
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_DATABASE || "bookstore",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "root"
    },
    migrations: {
      directory: `${__dirname}/db/knex_migrations`
    },
    seeds: {
      directory: `${__dirname}/db/knex_seeds`
    }
  }
};
