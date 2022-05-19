import dotenv = require("dotenv");
import path = require("path");

dotenv.config();

const dbConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [path.join(__dirname, "./src/entities/**/*.ts")],
  migrations: [path.join(__dirname, "./src/migrations/**/*.ts")],
  cli: {
    entitiesDir: path.join(__dirname, "./src/entities"),
    migrationsDir: path.join(__dirname, "./src/migrations"),
  },
};

export default dbConfig;
