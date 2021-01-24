const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://gyzcsepzgtxybb:040aa1bed937b40a125e53968dbd7c19eaccbeda4fb2dd09943cdf2b151447f3@ec2-3-216-89-250.compute-1.amazonaws.com:5432/d8ke3ovbquplkc"
);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
