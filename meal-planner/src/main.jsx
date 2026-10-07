import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
            children: [
                {index:true ,element: <Browse />},
                {path:"recipe/:id",element: <RecipeDetail />},
                {path:'favorite',element: <FavoritePage />},
            ]
        },
    ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
