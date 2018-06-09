import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Jak jsi bohatý/á?</h1>
        <h3> Zadej svůj čistý měsiční příjem:</h3>
        <select>
        <option value="cz">Česko (CZK)</option>
          <option value="sk">Slovenko (EUR)</option>
          
        </select>
        <input style={{display: 'block', margin: '10px auto'}} placeholder='Měsiční příjem'/>
      </div>
    );
  }
}

export default App;
