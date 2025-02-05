// Importar las funciones necesarias de Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Para Firestore, si lo usas
import { getStorage } from "firebase/storage"; // Para Storage, si lo usas

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyABcde7nM8mLPxXcU0Yw_yvNG8kx_8sFqU",
  authDomain: "fbclaseprueba.firebaseapp.com",
  projectId: "fbclaseprueba",
  storageBucket: "fbclaseprueba.firebasestorage.app",
  messagingSenderId: "289227959964",
  appId: "1:289227959964:web:c8648867fb850880c2c759",
  measurementId: "G-KXHB67QBSN",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios para usarlos en otras partes de la aplicación
export const analytics = getAnalytics(app);
export const auth = getAuth(app); // Para autenticación
export const db = getFirestore(app); // Para Firestore (base de datos)
export const storage = getStorage(app); // Para Storage

export default app; // Exporta la app por si necesitas inicializarla en otro lugar
