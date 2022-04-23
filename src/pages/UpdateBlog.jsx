import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import LogoBlog from "../assets/blok.png";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import {  EditBlog } from "../helpers/function";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";


function UpdateBlog() {
  const { user } = useContext(AppContext);
  const [updateBlog,setUpdateBlog] = useState();
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location.state.detail)
  useEffect(() => {
    setUpdateBlog(location?.state.detail);
  },[location]);
  console.log(updateBlog);
  const handleChange = (e) => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    e.preventDefault();
    const CurUser = user.email;
    setUpdateBlog({
      ...updateBlog,
      [e.target.name]: e.target.value,
      user: CurUser,
      date: `${day}-${month + 1}-${year}`,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    EditBlog(updateBlog)
    navigate("/");

  };
  return (
    <div>
          {user ? (
        <>
          <img src={LogoBlog} alt="" style={{ width: "150px" }} />
          <h1>----New Blog----</h1>
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: "40%", margin: "auto" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    placeholder="Title"
                    multiline
                    required
                    style={{ width: "100%" }}
                    name="title"
                    value={updateBlog?.title}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="İmage Url"
                    placeholder="İmage Url"
                    multiline
                    required
                    style={{ width: "100%" }}
                    name="imageUrl"
                    value={updateBlog?.imageUrl}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Content"
                    multiline
                    rows={15}
                    required
                    style={{ width: "100%" }}
                    name="content"
                    value={updateBlog?.content}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="success" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default UpdateBlog