import React, { useState } from "react";
import { AppBar, Button, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/index.js";

const Header = () => {
  const dispatch = useDispatch();
  
  const buttonStyle = {
    backgroundColor: "lightblue",
    color: "black",
  };

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState(0); // Set the default value

  return (
    <AppBar
      position="sticky"
      sx={{ background: "linear-gradient(to top, #09203f 0%, #537895 100%)" }}
    >
      <Toolbar>
        <Typography variant="h5">BlogsApp</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab component={Link} to="/blogs" value={0} label="All Blogs" />
              <Tab component={Link} to="/myBlogs" value={1} label="My Blogs" />
              <Tab component={Link} to="/blogs/add" value={2} label="Add Blog" />
            </Tabs>
          </Box>
        )}

        <Box sx={{ marginLeft: "auto" }}>
          {!isLoggedIn && (
            <>
            {" "}
              <Button
                component={Link} // Use 'component' instead of 'LinkComponent'
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                component={Link} // Use 'component' instead of 'LinkComponent'
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              variant="contained"
              style={buttonStyle}
              sx={{ margin: 1, borderRadius: 10 }}
              color="inherit"
              to="/auth"
              component={Link} // Use 'component' instead of 'LinkComponent'
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
