// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./pages/UserForm";
import SecondPage from "./pages/SecondPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
