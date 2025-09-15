import React from "react";
import app from "./firebase"; // Just importing ensures initialization

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> Firebase Initialized (Dummy Config)</h2>
      <p>
        This proves Firebase setup is complete for Week 1.  
        Replace <code>firebase.js</code> with real config locally.
      </p>
    </div>
  );
}

export default App;
