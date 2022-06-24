import "./App.scss";
import React, { useEffect } from "react";
import Landing from "./components/landing";
import Navigation from "./components/navigation";
import Footer from "./layout/footer/Footer";
import Product from "./components/product";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
