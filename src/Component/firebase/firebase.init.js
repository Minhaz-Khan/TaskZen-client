// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0KqzXBluXz0rD3bxsxqSju0R7haXJ1e4",
    authDomain: "my-todo-app-b9db8.firebaseapp.com",
    projectId: "my-todo-app-b9db8",
    storageBucket: "my-todo-app-b9db8.appspot.com",
    messagingSenderId: "9646800512",
    appId: "1:9646800512:web:219b97bd76b02c2d803065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app