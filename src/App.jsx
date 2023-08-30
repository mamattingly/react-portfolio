import "./App.css";
import "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { Outlet } from "react-router-dom";

// Need to update to use new react-router-dom
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
