"use client"
import React from "react";
import { useState } from "react";
import AppContext from "./appContext";

import { account , databases} from "@/appwrite/appwriteConfig";



const Appstate = (props)=>{

    const [user, setUser] = useState(false);
    const [userSession,setUserSession] = useState(null);
    const [userId,setUserId] = useState(null);
   

    return (
        <AppContext.Provider value={{user , userId,setUserId,setUser,userSession,setUserSession}}>
  {props.children}
        </AppContext.Provider>
    )
}

export default Appstate;
