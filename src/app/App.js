import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';
import tinker from './tink.png';

import Text from './components/Text/Text';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <img className={styles.logo} src={tinker} alt="tinker logo" />
        <Text heading1 className={styles.greet} component="h1">
          tinker.
        </Text>
      </div>
    );
  }
}

export default App;
