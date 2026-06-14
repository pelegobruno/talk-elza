// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração fornecida pelo Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAF8-VlZ4OpgghYgwMK2SEbAqQrvH3DhP0",
  authDomain: "receitas-app-32cb3.firebaseapp.com",
  projectId: "receitas-app-32cb3",
  storageBucket: "receitas-app-32cb3.firebasestorage.app",
  messagingSenderId: "652229213938",
  appId: "1:652229213938:web:0463b84fdd6309fc771a6b"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Exporta o banco de dados
export const db = getFirestore(app);
