
import { initializeApp } from "firebase/app";

// Dummy Firebase Config (Replace with real values locally)
const firebaseConfig = {
  apiKey: "FAKE_API_KEY_1234567890",
  authDomain: "dummy-app.firebaseapp.com",
  projectId: "dummy-app",
  storageBucket: "dummy-app.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
