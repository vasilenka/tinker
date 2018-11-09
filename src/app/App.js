import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

import Text from './components/Text/Text';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <Text className={classnames(styles.greet)} display2 component="h1">
          tinker.
        </Text>
      </div>
    );
  }
}

export default App;
