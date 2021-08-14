module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "15254842",
  database: "prod_log_development",
  synchronize: true,
  logging: false,
  entities: [
    "src/entities/**/*.ts"
  ],
  migrations: [
    "src/database/migrations/**/*.ts"
  ],
  cli: {
    migrationsDir: "src/database/migrations"
  }
};
