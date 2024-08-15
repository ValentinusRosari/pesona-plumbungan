import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import DetailPage from "./components/DetailPage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
