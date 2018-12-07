import styles from './Checkmark.module.scss';
import React from 'react';
import classnames from 'classnames';

const Checkmark = ({
  id,
  name,
  value,
  isChecked,
  className,
  onHover,
  component,
  ...restProps
}) => {
  let Component = component ? component : 'span';

  return (
    <Component
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
    >
      <input
        className={styles.box}
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={isChecked}
      />
      <div
        className={classnames({
          [styles.checkmark]: true,
          [styles.hoverCheckmark]: onHover
        })}
      />
    </Component>
  );
};

export default Checkmark;
