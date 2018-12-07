import styles from './Button.module.scss';
import React from 'react';
import classnames from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  secondaryAlt,
  primaryBold,
  className,
  small,
  large,
  ...restProps
}) => {
  return (
    <button
      type="button"
      className={classnames({
        [styles.secondary]: secondary,
        [styles.secondaryAlt]: secondaryAlt,

        [styles.primaryMedium]: primary,
        [styles.primaryBold]: primaryBold,

        [styles.small]: !secondaryAlt && small ? true : false,
        [styles.smallAlt]: secondaryAlt && small ? true : false,
        [styles.large]: !small && !secondaryAlt ? true : false,
        [styles.largeAlt]: secondaryAlt && !small ? true : false,

        [className]: className
      })}
    >
      {children}
    </button>
  );
};

export default Button;
