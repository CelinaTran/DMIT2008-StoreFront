// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIIkUfKsKOaq2DlHJ1UCEp8syZJNA9Yco",
    authDomain: "dmit2008-assessment-storefront.firebaseapp.com",
    databaseURL: "https://dmit2008-assessment-storefront-default-rtdb.firebaseio.com",
    projectId: "dmit2008-assessment-storefront",
    storageBucket: "dmit2008-assessment-storefront.appspot.com",
    messagingSenderId: "44376740558",
    appId: "1:44376740558:web:15165d88aaff441c4d769f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { db, storage }