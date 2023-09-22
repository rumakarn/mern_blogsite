import React, { useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import Auth from "./components/Auth";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Pass the userId to the login action
      dispatch(authActions.login(userId));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
