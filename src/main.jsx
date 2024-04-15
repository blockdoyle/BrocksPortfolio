import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/portfolio",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
