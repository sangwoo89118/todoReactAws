import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
