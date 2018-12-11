import styles from './Divider.module.scss';
import React from 'react';
import classnames from 'classnames';

const Divider = ({ small, medium, large, extra, className, ...restProps }) => {
  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles.small]: small,
        [styles.medium]: medium,
        [styles.large]: large,
        [styles.extra]: extra,
        [className]: true
      })}
    />
  );
};

export default Divider;
