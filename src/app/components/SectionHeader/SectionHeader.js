import styles from './SectionHeader.module.scss';
import React from 'react';
import classnames from 'classnames';

import Text from '../Text/Text';

const SectionHeader = ({
  bleed,
  full,
  narrow,
  icon,
  className,
  title,
  subtitle,
  ...restProps
}) => {
  return (
    <header
      className={classnames({
        [styles.root]: true,
        [styles.narrow]: narrow,
        [styles.bleed]: bleed,
        [styles.full]: full
      })}
    >
      <div className={styles.iconContainer}>
        <i className={classnames(styles.icon, `fas fa-${icon}`)} />
      </div>
      <div className={styles.titleContainer}>
        <Text className={classnames(styles.title)} heading2 component="h2">
          {title}
        </Text>
        <Text className={classnames(styles.subtitle)} normal>
          {subtitle}
        </Text>
      </div>
    </header>
  );
};

export default SectionHeader;
