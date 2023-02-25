import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/home';
import About from './components/pages/about';
import Temple from './components/pages/temple';
import Media from './components/pages/media';
import Donate from './components/pages/donate';
import BookStore from './components/pages/bookStore';
import Contact from './components/pages/contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  {
    path: "home",
    element: <div><Home/></div>,
  },
  {
    path: "about",
    element: <div><About/></div>,
  },
  {
    path: "temple",
    element: <div><Temple/></div>,
  },
  {
    path: "media",
    element: <div><Media/></div>,
  },
  {
    path: "donate",
    element: <div><Donate/></div>,
  },
  {
    path: "bookStore",
    element: <div><BookStore/></div>,
  },
  {
    path: "contact",
    element: <div><Contact/></div>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


