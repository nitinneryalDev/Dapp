// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

// components/Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700">Welcome Back 👋</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg transition-all duration-300 shadow-md"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-center text-sm">
        Don't have an account? <Link to="/signup" className="text-indigo-600 font-medium hover:underline">Sign up</Link>
      </p>
    </div>
  );
}

// components/Signup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Sign up with:", { email, password });
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md animate-fade-in">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-green-700">Create Account 🚀</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-all duration-300 shadow-md"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-center text-sm">
        Already have an account? <Link to="/login" className="text-green-600 font-medium hover:underline">Login</Link>
      </p>
    </div>
  );
}