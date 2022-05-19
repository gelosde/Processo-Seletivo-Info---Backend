import "reflect-metadata";
import { createConnection } from "typeorm";
import { config } from "dotenv";

config();
createConnection()
  .then(() => {
    const PORT = process.env.PORT || 3000;

    console.log(`app running in ${PORT}`);
  })
  .catch((error) => console.log(error));
