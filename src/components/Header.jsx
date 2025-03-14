import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = ()=>{
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.

            navigate("/")

    }).catch((error) => {
        // An error happened.
        navigate("/error")
    });
    }

    return(
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
            <img className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo" 
            />
           { user && <div className="flex p-2 ">
                <img className="h-12 w-12 m-2"
                    alt="userIcon"
                    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                />
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
                
            </div>}
        </div>
    )
}

export default Header;