import styles from './Navbar.module.scss';
import React from 'react';
import classnames from 'classnames';

import { ReactComponent as Logo } from './logo.svg';

import Text from './../Text/Text';

const Navbar = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.container)}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
          <Text className={styles.name} heading4 component="h1">
            Invoker
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
