import React from "react";
import "./App.css";
// import Search from "./Components/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Restaurant from "./Components/Restaurant";
import { BrowserRouter } from "react-router-dom";
// import MenuData from "./Data.json"
import Router from "./routes"

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
        <Header />
        <Router />
        <Footer />
        </div>
      </BrowserRouter>
    
  );
}

export default App;
