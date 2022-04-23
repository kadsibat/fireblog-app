import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import Toastify from "./toast";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // apiKey: "AIzaSyA8uLqEHAe4242TNmiU4Bt6MkhlutqGZcw",
    // authDomain: "fire-blog-65074.firebaseapp.com",
    // projectId: "fire-blog-65074",
    // storageBucket: "fire-blog-65074.appspot.com",
    // messagingSenderId: "460997102516",
    // appId: "1:460997102516:web:9208e971e47ecd464f80e1"

    apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;


export const yeniKullanici=(email, password,navigate)=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
   console.log( userCredential)
   navigate("/login")
    // ...
  })
  .catch((error) => {
    console.log(error)
    
  });
}


export const kullaniciGiris=(email, password,navigate)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log( userCredential)
  
    Toastify("login işlemi yapıldı")
  })
  .catch((error) => {
    console.log(error)
    Toastify("gecersiz giriş")
  });

}


//kullanıcı biilgileri yakalama
export const cikis=()=>{
  signOut(auth)
}

export const mevcutKullanici= (setUser) =>{
 
    onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
      } else {
        setUser(false)
      }
    });
}