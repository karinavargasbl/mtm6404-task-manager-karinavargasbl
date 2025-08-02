// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjzvAr8HYdhOi0PhRVgPH0UlEcZs1eg7Q",
  authDomain: "task-managerkarina.firebaseapp.com",
  projectId: "task-managerkarina",
  storageBucket: "task-managerkarina.appspot.com",
  messagingSenderId: "941904217327",
  appId: "1:941904217327:web:a4d85a54f81fe920e3071a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Habilita persistencia offline en Firestore
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === "failed-precondition") {
    console.log("Persistencia falló: varias pestañas abiertas.");
  } else if (err.code === "unimplemented") {
    console.log("Persistencia no soportada por el navegador.");
  }
});

export { db };
