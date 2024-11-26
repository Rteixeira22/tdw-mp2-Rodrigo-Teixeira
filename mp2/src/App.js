import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./pages/details";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:characterId" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
