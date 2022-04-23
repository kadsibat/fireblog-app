import { createContext, useEffect, useState } from "react";
import { mevcutKullanici } from "../helpers/firebase";

const AppContext = createContext();


export const AppContextProvider = (props) =>{
    const [user, setUser] = useState()
    const [blog,setBlog] = useState({
        user : "",
        title: "",
        imageUrl : "",
        content: "",
        date : ""
    })
    useEffect(() => {
 mevcutKullanici(setUser)
    }, [])
    
    return (
       <AppContext.Provider value={{user,blog,setBlog}}>
           {props.children}
       </AppContext.Provider>
    )
}

export default AppContext;