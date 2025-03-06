npm create vite@latest netflix-gpt -- --template react
install tailwind amd configure 
    -npm install -D tailwindcss@3 postcss autoprefixer
    -npx tailwindcss init -p
npm run dev

install : npm i react-router-dom

When the app loads at /, the Login component is shown.
If the user navigates to /browse, the Browse component is displayed.
The RouterProvider makes sure the correct component is rendered based on the URL.

Hearder
Login form