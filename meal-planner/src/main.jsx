import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from "./App.jsx";
import Browse from "./pages/Browse.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import FavoritePage from "./pages/Favoritepage.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/RecipeDetail:id",
            element: <RecipeDetail />,
        },
        {
            path: "/Favorite/:id",
            element: <FavoritePage />,
        },
    ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
