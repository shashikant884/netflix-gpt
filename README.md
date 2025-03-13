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
The Full Name input is only shown for Sign 

-form Validation
-useRef

checkValidData(email, password)

Uses regex to validate:
Email format (example@domain.com).
Password (at least 8 characters, 1 uppercase, 1 lowercase, and 1 number).
Returns an error message if invalid, else null.
handleButtonClick()

Retrieves email & password values from useRef.
Calls checkValidData() to validate inputs.
Logs the validation result.
This approach ensures basic client-side validation before form submission.

- npm install firebase
- firebase deploye 
- npm install -g firebase-tools
- firebase login
- firebase init
- npm run build
- firebase deploy