import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar } from "@mui/material";
import wing from "../assets/pngwing.com.png";
import { useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import { cikis } from "../helpers/firebase";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";


export default function Navbar() {
  const {user} =React.useContext(AppContext)
  console.log("sibel",user);

  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setAnchorEl(null);   //tıklandıgında acık kalmamsını saglıyor
    navigate("/login");
  };
  const handleRegister = () => {
    setAnchorEl(null);
    navigate("/register");
  };
  const handleProfile=()=>{
    setAnchorEl(null);
    navigate("/profile");
  }
  const handleNew= () =>{
    setAnchorEl(null);
    navigate("/new");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static" >
        <Toolbar style={{ backgroundColor: "#85C88A",height:"90px" }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Avatar
            alt="Remy Sharp"
            src={wing}
            sx={{ width: 72, height: 72 }}
            onClick={() => navigate("/")}
          />
          <Typography  onClick={() => navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:"cursive"}}>
          <i>{"<SibelKayahan/>"}</i>
        <span>BLOG</span>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <LoginTwoToneIcon/>
              </IconButton>
              {!user ? ( <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
              </Menu>):( <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleNew}>New</MenuItem>
                 <MenuItem onClick={()=>cikis()}>Logout</MenuItem></Menu>)}
             
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
