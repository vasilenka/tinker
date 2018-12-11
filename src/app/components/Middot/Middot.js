import styles from './Middot.module.scss';
import React from 'react';
import classnames from 'classnames';

const Middot = ({ className, ...restProps }) => {
  return <span {...restProps} className={classnames(styles.root, className)} />;
};

export default Middot;
