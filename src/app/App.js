import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

import Text from './components/Text/Text';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <Navbar />
        <Text className={classnames(styles.greet)} display2 component="h1">
          tinker.
        </Text>
      </div>
    );
  }
}

export default App;
