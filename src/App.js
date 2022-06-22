import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<InfoPage />}/>
    </Routes>
  );
}

export default App;
