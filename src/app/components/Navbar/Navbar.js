import styles from './Navbar.module.scss';
import React from 'react';
import classnames from 'classnames';

import { ReactComponent as Logo } from './mid.svg';
import { ReactComponent as Github } from './github.svg';

const Navbar = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.container)}>
        <div className={styles.brand}>
          <Logo className={styles.logo} />
        </div>
        <a
          href="https://github.com/vasilenka/invoker"
          className={styles.githubLink}
        >
          <Github className={styles.github} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
