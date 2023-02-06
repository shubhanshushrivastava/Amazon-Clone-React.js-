import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
