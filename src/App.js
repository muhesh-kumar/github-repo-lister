import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
