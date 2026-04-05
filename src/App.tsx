import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <div>

      {/* ✅ Navbar */}
      <nav
        style={{
          padding: "15px",
          background: "#111",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              color: "#fff",
              marginRight: "20px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            🚀 SkillPass AI
          </Link>
        </div>

        <div>
          <Link
            to="/"
            style={{
              color: "#fff",
              marginRight: "15px",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          {/* ✅ FIXED Analyze Link */}
          <Link
            to="/user/akankshad1712"
            style={{
              color: "#0f0",
              textDecoration: "none",
            }}
          >
            Analyze
          </Link>
        </div>
      </nav>

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;