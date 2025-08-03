// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager
} from "firebase/firestore";

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

// Inicializa Firestore con persistencia local
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager() // soporta múltiples pestañas
  })
});

export { db };
