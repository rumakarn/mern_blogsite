import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog.js";
const Blogs = () => {
  const[blogs,setBlogs]=useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:4000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.blogs);
    });
  }, []);
console.log(blogs);
return(
  <div>
    {blogs &&
        blogs.map((blog, index) => (
          <Blog
          id={blog._id}
          key={index}
          title={blog.title}
          isUser={localStorage.getItem("userId") === blog.user._id}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}/>
    ))}
  </div>
)
}
export default Blogs;