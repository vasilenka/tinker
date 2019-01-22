import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';
import tinker from './tink.png';

import Text from './components/Text/Text';
import Image from './components/Image/Image';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Image
              naturalWidth="1"
              naturalHeight="1"
              src={tinker}
              alt="tinker logo"
            />
          </div>
          <Text
            heading1
            style={{ fontWeight: '900' }}
            className={styles.greet}
            component="h1"
          >
            tinker.
          </Text>
        </div>
      </div>
    );
  }
}

export default App;
