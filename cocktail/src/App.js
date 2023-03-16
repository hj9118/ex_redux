import React from "react";
import Home from "./pages";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail/>} />
      </Routes>
    </div>
  );
}

export default App;