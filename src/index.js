import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Header from './composnets/Header';
import Footer from './composnets/Footer';
import List from './list/List'




const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div className='app'>
    <Header />

    <div className='app-body'>

      <List />

    </div>
    <Footer />

  </div>,
  // document.getElementById('root')
);


