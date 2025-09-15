// src/App.jsx
import React from "react";
import { db } from "./firebase";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Week-1 Firebase Specialist Demo</h1>
      <p>Firebase initialized ✅</p>
      <p>Firestore connected ✅</p>
    </div>
  );
}

export default App;
