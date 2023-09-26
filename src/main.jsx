
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBtzRgnyJ_RQRdEHlQnCSvUQ-L9mysIwo",
  authDomain: "tienda-sport-1f06e.firebaseapp.com",
  projectId: "tienda-sport-1f06e",
  storageBucket: "tienda-sport-1f06e.appspot.com",
  messagingSenderId: "852155719880",
  appId: "1:852155719880:web:10be9c8c3b78ae4c8005fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <> 
<ChakraProvider>
    <App />
</ChakraProvider>
  </>,
)
