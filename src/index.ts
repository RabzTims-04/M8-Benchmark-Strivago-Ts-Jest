import server from "./server"
import mongoose from "mongoose"

const port = process.env.PORT || 3001

mongoose
  .connect(`${process.env.MONGO_CONNECTION}/production`,() => {
      console.log("Connected to Atlas");
      server.listen(port, () => {
          console.log("Server running on port ", port);
      })
  })