import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./pages/details";
import About from "./pages/about";
import Favourites from "./pages/favourites";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:mealId" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
