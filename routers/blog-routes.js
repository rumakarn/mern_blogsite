import express from "express";
import { getAllBlogs } from "../contollers/blog-controller.js";
import { addBlog } from "../contollers/blog-controller.js";
import { updateBlog, getById, deleteBlog , getByUserId} from "../contollers/blog-controller.js";
const blogRouter=express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserId)
export default blogRouter;

