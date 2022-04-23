import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import LogoBlog from "../assets/blok.png";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { AddBlog } from "../helpers/function";
import MinimizeIcon from '@mui/icons-material/Minimize';
import { useNavigate } from "react-router-dom";

function New() {
  const navigate=useNavigate()
  const { blog, setBlog,user } = useContext(AppContext);
  console.log(blog)
  const handleChange = (e) => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    e.preventDefault();
    const CurUser = user.email
    setBlog({...blog,[e.target.name]:e.target.value,user:CurUser,date:`${day}-${month+ 1}-${year}`})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(blog);
    navigate("/")
    setBlog({[e.target.name]:""})
  }
  return (
    <div className="newblog">
      <img src={LogoBlog} alt="" style={{ width: "150px" }} />
      <h1><MinimizeIcon/>New Blog<MinimizeIcon/></h1>
      <form onSubmit={handleSubmit}>
        <Box sx={{ width: "30%", margin: "auto" }}>
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
                value={blog.title}
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
                value={blog.imageUrl}
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
                value={blog.content}
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
    </div>
  );
}

export default New;