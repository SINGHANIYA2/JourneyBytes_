import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Dummy Firebase config for hackathon
const firebaseConfig = {
  apiKey: "dummy",
  authDomain: "dummy",
  projectId: "dummy-project-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("✅ Firebase App Initialized:", app.name);

// Initialize Firestore
const db = getFirestore(app);
console.log("✅ Firestore linked:", db);

export { db };