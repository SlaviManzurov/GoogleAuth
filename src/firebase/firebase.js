import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCa-lK--hcG15GLyZur-Gp0IDrp1y3NB2o",
  authDomain: "login-68928.firebaseapp.com",
  projectId: "login-68928",
  storageBucket: "login-68928.appspot.com",
  messagingSenderId: "192409184036",
  appId: "1:192409184036:web:02d4adac01d806c118f5b1"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)