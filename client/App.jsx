import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import GalleryPage from "./pages/GalleryPage";
import "./index.css";
import { fetchData } from "./services/api.js"; 


const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <>
    
    <div>{data ? JSON.stringify(data): null}</div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
