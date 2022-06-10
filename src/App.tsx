import "./App.scss";
import React from "react";
import Landing from "./components/landing";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
