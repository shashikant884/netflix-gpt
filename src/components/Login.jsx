import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {

    const email = useRef(null);
    const password = useRef(null);
    const [isSignIn , setIsSignIn] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);

    const handleButtnClick = () =>{
        // console.log(email.current.value)
        // console.log(password.current.value);
        const message = checkValidData(email.current.value , password.current.value);
        setErrorMessage(message);

        if(message) return;
        if(!isSignIn) {
            // sign up
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ " - " +errorMessage);
    // ..
  });
        }else{
            // sign in
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ " _ "+errorMessage);
  });

        }



    }

    return(
        <div>
            <div>
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg"
            alt="IMG" 
            className=" absolute "
            />
            </div>
            <form   onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-3">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && ( 
                    <input type="text" placeholder="Name " className="p-4 my-4 w-full bg-gray-700"/>
                    )}
                <input type="text" placeholder="Email Address " className="p-4 my-4 w-full bg-gray-700" ref={email} />
                <input type="password" placeholder="Password " className="p-4 my-4 w-full bg-gray-700" ref={password} />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtnClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={()=>{setIsSignIn(!isSignIn)}}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already Have accunt? Sign In" }</p>

            </form>
        </div>
    )
}

export default Login;
// export default Login; // ✅ Ensure this line is present
