import React from 'react';
import './App.css';
import Screen from './Screen';
import Controls from './Controls';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="IPodFrame">
          <Screen />
          <Controls />
        </div>
        {/* <div className="control">
        </div> */}
      </div>
    );
  }
}

export default App;
