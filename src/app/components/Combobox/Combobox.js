import styles from './Combobox.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import Downshift from 'downshift';

import Autocomplete from './../Autocomplete/Autocomplete';
import FieldInput from './../FieldInput/FieldInput';
import Text from './../Text/Text';

class Combobox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  render() {
    let {
      className,
      placeholder,
      small,
      limitedHeight,
      id,
      label,
      defaultValue,
      hint,
      inline,
      options,
      ...restProps
    } = this.props;

    const labelProps = {
      labelMedium: !small,
      labelSmall: small,
      htmlFor: id
    };

    return (
      <Downshift
        {...restProps}
        // onChange={selection => alert(`You selected ${selection.name}`)}
        itemToString={item => (item ? item.name : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div
            className={classnames({
              [styles.root]: true,
              [className]: className
            })}
          >
            <Text
              {...getLabelProps()}
              className={classnames({
                [styles.label]: true,
                [styles.stack]: !inline,
                [styles.inline]: inline
              })}
              {...labelProps}
              component="label"
            >
              {label}
            </Text>
            <FieldInput
              {...getInputProps()}
              onClick={this.handleClick}
              placeholder={placeholder}
              small={small}
              id={id}
              name={id}
              defaultValue={defaultValue}
              className={classnames({
                [styles.field]: true
              })}
            />
            <Autocomplete
              {...getMenuProps()}
              isOpen
              limitedHeight={limitedHeight}
            >
              {isOpen
                ? options
                    .filter(
                      item => !inputValue || item.name.includes(inputValue)
                    )
                    .map((item, index) => (
                      <div
                        className={styles.item}
                        {...getItemProps({
                          key: item.id,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? 'lightgray'
                                : 'white',
                            fontWeight:
                              selectedItem === item ? 'bold' : 'normal'
                          }
                        })}
                      >
                        <Text heading5 component="h4">
                          {item.name}
                        </Text>
                        <Text small>{item.email}</Text>
                      </div>
                    ))
                : null}
            </Autocomplete>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Combobox;
