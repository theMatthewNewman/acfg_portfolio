import './App.css';
import Layout from "./componants/layout/Layout";
import Store from "./Store.js";
import firebase from 'firebase/app';

firebase.initializeApp({
    apiKey: "AIzaSyBz2PQRQYaFNk9DBzKr-4WyOAGZf1uNcWI",
    authDomain: "portfolio-eac80.firebaseapp.com",
    projectId: "portfolio-eac80",
    storageBucket: "portfolio-eac80.appspot.com",
    messagingSenderId: "343687067517",
    appId: "1:343687067517:web:7ecbd53be5f43bf1d67e14",
    measurementId: "G-HWN6ZJWBPX"
});

function App() {
    return (
	<Store>
	  <Layout />
	</Store>
    );
}

export default App;
