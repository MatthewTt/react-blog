import Layout from "../components/Layout";
import Home from "../pages/Home";
import React from "react";
import Article from "../pages/Article";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {
        path: "/article",
        element: <Article />,
      },
    ]
  },

  {path: '*', element: <Home />}
]
export default router;
