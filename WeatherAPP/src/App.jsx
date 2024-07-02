import React from 'react';
import Weather from './components/Weather';
import vedio from './vedio.mp4';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

function App() {
  return (
    <div className="App">
      <video playsInline autoPlay muted loop className="w-100">
        <source src={vedio} />
    </video>
      <h1 className='text-black text-center text-uppercase pt-3'>Welcome to Weather APP</h1>
      <Weather />

    </div>
  );
}

export default App;
