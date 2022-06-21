import "./App.scss";
import React from "react";
import Landing from "./components/landing";
import Navigation from "./components/navigation";
import Footer from "./layout/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
