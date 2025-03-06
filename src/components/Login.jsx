import Header from "./Header";

const Login = () => {
    return(
        <div>
            <div>
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg"
            alt="IMG" 
            className=" absolute inset-0 w-full h-full object-cover"
            />
            </div>
            <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-3">Sing In</h1>
                <input type="text" placeholder="Email Address " className="p-4 my-4 w-full bg-gray-700"  />
                <input type="password" placeholder="Password " className="p-4 my-4 w-full bg-gray-700" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sing In</button>

            </form>
        </div>
    )
}

export default Login;
// export default Login; // ✅ Ensure this line is present
