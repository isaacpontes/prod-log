import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("Database connection estabilished successfully."));
