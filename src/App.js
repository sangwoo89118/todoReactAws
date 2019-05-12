import React from 'react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

import SideNav from './components/layouts/nav/SideNav';
import Main from './components/layouts/main/Main';

import Store from './context/Store';

Amplify.configure(awsmobile);

const App = () => {
  return (
    <Store>
      <div className="App">
        <div className="container">
          <SideNav />
          <Main />
        </div>
      </div>
    </Store>
  )
}

export default withAuthenticator(App, false);
