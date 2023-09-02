import "./main.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About/About.jsx";
import Projects from "./routes/Projects/Projects.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import Resume from "./routes/Resume/Resume.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import App from "./App.jsx";

// router is the top-level React component for the app.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
