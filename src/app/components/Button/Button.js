import styles from './Button.module.scss';
import React from 'react';
import classnames from 'classnames';
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types';

const Button = ({
  type,
  children,
  primary,
  onClick,
  secondary,
  secondaryAlt,
  primaryBold,
  primaryAlt,
  primaryAltBold,
  className,
  small,
  large,
  disabled,
  ...restProps
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={classnames({
        [styles.secondary]: secondary,
        [styles.secondaryAlt]: secondaryAlt,

        [styles.primaryMedium]: primary,
        [styles.primaryBold]: primaryBold,

        [styles.primaryAltMedium]: primaryAlt,
        [styles.primaryAltBold]: primaryAltBold,

        [styles.small]: !secondaryAlt && small,
        [styles.smallAlt]: secondaryAlt && small,
        [styles.large]: !small && !secondaryAlt,
        [styles.largeAlt]: secondaryAlt && !small,

        [styles.disabled]: disabled,

        [className]: className
      })}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

Button.defaultProps = {
  large: true,
  disabled: false,
  type: 'button'
};

Button.propTypes = {
  className: oneOfType([string, object]),
  type: oneOf(['button', 'submit']),
  disabled: bool,
  small: bool,
  large: bool,
  children: node.isRequired
};

export default Button;
