import styles from './Box.module.scss';
import React from 'react';
import classnames from 'classnames';

const Box = ({
  children,
  inset,
  inline,
  stack,
  vertical,
  horizontal,
  className,
  ...restProps
}) => {
  return (
    <div
      className={classnames({
        [styles.root]: true,
        [styles[inset]]: inset,
        [styles[horizontal]]: horizontal,
        [styles[vertical]]: vertical,
        [styles[inline]]: inline,
        [styles[stack]]: stack
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Box;
