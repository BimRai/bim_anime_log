import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WatchedList from './pages/WatchedList';
import Watching from './pages/Watching';
import ToWatch from './pages/ToWatch';
import LogIn from './pages/LogIn.js';
import SignUp from './pages/SignUp.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "watched",
    element: <WatchedList/>,
  },
  {
    path: "watching",
    element: <Watching/>,
  },
  {
    path: "findoutmore",
    element: <Watching/>,
  },
  {
    path: "towatch",
    element: <ToWatch/>,
  },
  {
    path: "socials",
    element: <ToWatch/>,
  },
  {
    path: "signup",
    element: <SignUp/>,
  },
  {
    path: "login",
    element: <LogIn/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
