-npm create vite@latest netflix-gpt -- --template react
-install tailwind amd configure 
    -npm install -D tailwindcss@3 postcss autoprefixer
    -npx tailwindcss init -p
-npm run dev

-install : npm i react-router-dom

When the app loads at /, the Login component is shown.
If the user navigates to /browse, the Browse component is displayed.
The RouterProvider makes sure the correct component is rendered based on the URL.

-Hearder
-Login form
-Sign In
-Sign Up

🔹 How It Works
useState(true)

true → Sign In form is shown by default.
false → Sign Up form is shown.
Toggle Between Forms

When clicking "New to Netflix? Sign Up Now", setIsSignIn(!isSignIn) toggles the state.
If isSignIn === false, it changes to "Already have an account? Sign In".
Dynamic Content

The title (Sign In / Sign Up) and button text update dynamically.
The Full Name input is only shown for Sign Up