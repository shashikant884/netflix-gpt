import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removUser } from "../utils/userSlice";


const Body = () =>{

    const dispach = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
            path : "/browse",
            element : <Browse />
        }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            const {uid , email, displayName} = user;
              dispach(addUser({uid: uid , email : email , displayName : displayName}));
            } else {
              dispach(removUser());
            }
          });

    },[]);

    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;