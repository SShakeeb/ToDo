import React from 'react';
import { RecoilRoot } from "recoil";
import HomePage from "./scenes/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <HomePage />
      </RecoilRoot>
    </div>
  );
}

export default App;
