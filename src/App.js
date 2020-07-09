import React from 'react';

//styling
import './App.css';

//components
import Navbar from './Navbar/Navbar';
import NavSmall from './Navbar/NavSmall';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <NavSmall/>
    </div>
  );
}

export default App;
