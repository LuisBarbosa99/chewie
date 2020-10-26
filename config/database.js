"use strict";

const Env = use("Env");

const Helpers = use("Helpers");
const URL = require("url-parse");
//const PROD_MYSQL_DB = new URL(Env.get("JAWSDB_AMBER_URL"));

module.exports = {
  connection: Env.get("DB_CONNECTION", "sqlite"),

  sqlite: {
    client: "sqlite3",
    connection: {
      filename: Helpers.databasePath(
        `${Env.get("DB_DATABASE", "adonis")}.sqlite`
      )
    },
    useNullAsDefault: true,
    debug: Env.get("DB_DEBUG", false)
  },

  mysql: {
    client: "mysql",
    connection: {
      host: Env.get("DB_HOST", '52.86.255.97'),
      port: Env.get("DB_PORT", ""),
      user: Env.get("DB_USER", 'root'),
      password: Env.get("DB_PASSWORD", ''),
      database: Env.get("DB_DATABASE", 'adonis')
    },
    debug: Env.get("DB_DEBUG", false)
  }
};