import "reflect-metadata";
import app from "./app";
import { createConnection } from "typeorm";
import { config } from "dotenv";

config();

createConnection()
  .then(() => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () =>
      console.log(`App runing on  http://localhost:${PORT}/`)
    );
  })
  .catch((error) => console.log(error));
