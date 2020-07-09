import React from 'react';
import logo from './logo.svg';
import './App.css';
// Component
import GridComponent from "./components/Grid/Grid"
// Context.
import {GlobalProvider} from "./components/context/GlobalContext"

function App() {
  return (
    <div className="App">
      <GlobalProvider> 
          <GridComponent />
        </GlobalProvider>
    </div>
  );
}

export default App;
