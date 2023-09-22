import express from "express";
import mongoose from "mongoose";
import router from "./routers/user-routes.js";
import blogRouter from "./routers/blog-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json())
// Use the user router
app.use("/api/user",router);
app.use("/api/blog", blogRouter)

// Connect to MongoDB and start the server
mongoose
  .connect("mongodb+srv://rumakarn70:4NywefsR0lDUfVK5@cluster0.9llueuy.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to the database");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((err) => console.error(err));
