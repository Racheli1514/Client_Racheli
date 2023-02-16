import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


export const context = createContext();

export default function Context(props) {
    const [myuser, setMyuser] = useState({FirstName:"",LastName: "",Tz: '',DateOfBirth: '',Min: null, HMO: null});
    const [arrchild, setArrchild]=useState([]);
  

        return(
            <context.Provider value={{myuser, setMyuser,arrchild,setArrchild}}>
            {props.children}
            </context.Provider>
        );
}