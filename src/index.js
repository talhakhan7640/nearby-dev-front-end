import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/users/register" />} />

      <Route path="/users">
        <Route index path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>


    {/* <Route path='/' element={<App />}/> */}

  </BrowserRouter>
);