import React from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import "./Register.css";
import * as Yup from "yup";
import auth, { yeniKullanici } from "../helpers/firebase";
import { useNavigate } from "react-router-dom"; 
import { Avatar } from "@mui/material";
import blok from "../assets/blok.png";
import google from "../assets/google.png";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const myValidationSchema = Yup.object({ 
    email : Yup.string().email("Hatalı giriş yaptınız...").required("Lütfen E-mail adresinizi giriniz..."),
    password: Yup.string()
    .required("Şifre Girmeniz gerekmektedir.")
    .min(8, "Çok kısa/ En az 8 karakter giriniz.")
    .matches(/\d+/, "Şifre numara içermelidir.")
    .matches(/[a-z]+/, "şifre küçük harf içermelidir.")
    .matches(/[A-Z]+/, "şifre büyük harf içermelidir.")
    .matches(/[!?.@#$%^&*()-+]+/, "şireniz özel karakter içermelidir."),
}) 

function Register() {

const navigate=useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit =(values,{resetForm}) =>{
    //   alert(
    //       `
    //       email:${values.email}
    //       `
    //   )
    yeniKullanici(values.email,values.password,navigate)
    resetForm();
  }
  console.log(initialValues)


  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try{
      await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate("/")
      }).catch((err) => {
        alert(err.message)
      })
    }catch(err) {alert(err.message)}
  }
 
  return (
    <div className="regis">
    <div>
      {/* <HowToRegIcon sx={{ transform: "scale(3)" }} />
      <h1>Sign Up</h1> */}
      <Formik 
      initialValues={initialValues} 
      onSubmit={handleSubmit} 
      validationSchema={myValidationSchema}>

        {({ values, handleChange,handleSubmit,errors,touched,handleBlur}) => (
          <form className="box" onSubmit={handleSubmit}>_________
            <Avatar
                className="avatar"
                alt="Remy Sharp"
                src={blok}
                sx={{ width: 100, height: 100 }}
                
              />
              <h2 style={{fontFamily:"cursive"}}>─── REGİSTER ───</h2>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              helperText={touched.email&&errors.email}
              error={touched.email&&Boolean(errors.email)}
              onBlur={handleBlur}
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              type="password"
              helperText={touched.password&&errors.password}
              error={touched.password&&Boolean(errors.password)}
              onBlur={handleBlur}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" color="success" sx={{ width: "100%" }} type="submit">
                Register
              </Button>
            </div>
          </form>
        )}
      </Formik>
      <Button
      className="btn"
          variant="text"
          sx={{ width: "30%", marginTop: "1rem",color:"black"}}
          type="submit"
          onClick={signInWithGoogle }
        >
          With  <img src={google} alt="" style={{width:"75px",marginLeft:"10px"}}/>
        </Button>
    </div>
    </div>
  );
}

export default Register;