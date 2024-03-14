import "./components/Header/Header.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Transition from "./components/Transition.jsx";

import { Outlet, useLocation } from "react-router-dom";

// App renders the Header, the main content, and the Footer.
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <Outlet location={location} key={location.pathname} />
      </main>
      <Footer />
    </>
  );
}

export default App;
