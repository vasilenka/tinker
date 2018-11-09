import styles from './Section.module.scss';
import React from 'react';
import classnames from 'classnames';

const Section = ({
  children,
  narrow,
  full,
  bleed,
  className,
  ...restProps
}) => {
  return (
    <div
      className={classnames({
        [styles.root]: true,
        [styles.narrow]: narrow,
        [styles.full]: full,
        [styles.bleed]: bleed,
        [className]: className
      })}
    >
      {children}
    </div>
  );
};

export default Section;
