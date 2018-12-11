import styles from './FormContainer.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Text from './../Text/Text';
import Divider from './../Divider/Divider';
// import Middot from './../Middot/Middot';

class FormContainer extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <Text heading1 component="h1">
          Heading1 - Understanding React Render Props and HOC
        </Text>
        <Text heading2 component="h2">
          Heading2
        </Text>
        <Text heading3 component="h3">
          Heading3
        </Text>
        <Text heading4 component="h4">
          Heading4
        </Text>
        <Text heading5 component="h5">
          Heading5
        </Text>
        <Text heading6 component="h6">
          Heading6
        </Text>

        <Divider extra />

        <Text className={styles.heading} heading5 component="h2">
          Paragraph Small
        </Text>
        <Text small component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis,
          placeat ipsam minus error, voluptatum nesciunt consectetur iste, ipsa
          praesentium cupiditate dicta magnam? Quaerat quis error numquam
          dignissimos minima explicabo.
        </Text>

        <Text className={styles.heading} heading5 component="h2">
          Paragraph Medium
        </Text>
        <Text medium component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis,
          placeat ipsam minus error, voluptatum nesciunt consectetur iste, ipsa
          praesentium cupiditate dicta magnam? Quaerat quis error numquam
          dignissimos minima explicabo.
        </Text>
        <Text className={styles.heading} heading5 component="h2">
          Paragraph Large
        </Text>
        <Text large component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis,
          placeat ipsam minus error, voluptatum nesciunt consectetur iste, ipsa
          praesentium cupiditate dicta magnam? Quaerat quis error numquam
          dignissimos minima explicabo.
        </Text>
      </div>
    );
  }
}

export default FormContainer;
