import "reflect-metadata";
import app from "./app";
import { createConnection } from "typeorm";
import { config } from "dotenv";

config();
createConnection()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    // app.use(
    //   "/",
    //   swaggerUiExpress.serve,
    //   swaggerUiExpress.setup(swaggerDocument)
    // );

    console.log(`app running in ${PORT}`);
  })
  .catch((error) => console.log(error));
