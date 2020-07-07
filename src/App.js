import React from 'react';

//styling
import './App.css';

//components
import Navbar from './Navbar';
import NavSmall from './NavSmall';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <NavSmall/>
    </div>
  );
}

export default App;
