import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Hednavbar from './component/navbar';
import Gatall from './component/getall';
import Gatbyid from './component/getbyid';
import Insert from './component/insert';
import Update from './component/update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/navbar' element={<Hednavbar />}></Route>
        <Route path='/' element={<Gatall />}></Route>
        <Route path='/getby/:id' element={<Gatbyid />}></Route>
        <Route path='/insert' element={<Insert />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
