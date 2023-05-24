import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"

import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';


import reportWebVitals from './reportWebVitals';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

