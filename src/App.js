import React from 'react';
import './App.css';
import Screen from './Screen';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <div className="IPodFrame">
           <Screen />
          <div className="control"></div>
        </div>
      </div>
    );
  }
}

export default App;
