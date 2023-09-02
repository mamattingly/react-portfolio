import "./App.css";
import "./components/Header/Header.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { Outlet } from "react-router-dom";

// App renders the Header, the main content, and the Footer.
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
