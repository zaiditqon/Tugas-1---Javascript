import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BooksPage from "./pages/BooksPage";
import Dashboard from "./pages/Dashboard";
import GenresPage from "./pages/GenresPage";
import AuthorsPage from "./pages/AuthorsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "books", element: <BooksPage /> },
      { path: "genres", element: <GenresPage /> },
      { path: "authors", element: <AuthorsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
