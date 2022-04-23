import React from "react";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import New from "../pages/New";
import Detail from "../pages/Detail";
import UpdateBlog from "../pages/UpdateBlog";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/new" element={<New/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/updateblog" element={<UpdateBlog/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
