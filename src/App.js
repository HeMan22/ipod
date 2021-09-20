import React from 'react';
import Screen from './Screen';
import Controls from './Controls';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="IPodFrame">
          <Screen />
          <div className="control">
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
