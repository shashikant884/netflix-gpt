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

- npm i @reduxjs/toolkit
- npm install react-redux

Created a Redux store with userSlice
Provided appStore to the <Provider> in your app

Emplemented sign Out
Profile update

- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa

- unsubscribe onAuthStateChanged
  onAuthStateChanged sets up a listener for auth changes.
  It returns an unsubscribe function.
  The cleanup function (return () => unsubscribe();) ensures the listener is removed when the component unmounts.

# Body Component

Manages routing using react-router-dom.
Defines two routes:
/ → Renders the Login component.
/browse → Renders the Browse component.

# Header Component

Displays the app logo and user profile (if logged in).
Listens for Firebase authentication changes using onAuthStateChanged.
Updates Redux store with user info when logged in or removes it when logged out.
Provides a Sign Out button that calls signOut(auth).

# Login Component

Renders a sign-in/sign-up form with email & password inputs.
Uses Firebase authentication (signInWithEmailAndPassword, createUserWithEmailAndPassword).
Stores signed-in user data in Redux.
Toggles between Sign In & Sign Up modes.
Displays error messages for invalid credentials.
Together, these components handle authentication, navigation, and user state management.

# Login TMDB webside

Create and app to get access of API Read Access Token and API key
get data form TMDB now playing movies list api
