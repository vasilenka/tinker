// import styles from './Option.module.scss';
import React, { useContext } from 'react';
// import cx from 'classnames';
import { DropdownContext } from '../context/context';

const Option = ({ value, label, onClick, isDisabled, ...restProps }) => {
  const dropdownContext = useContext(DropdownContext);

  const handleClick = e => {
    if (dropdownContext) {
      dropdownContext.setSelected(value);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <option disabled={isDisabled} value={value} onClick={handleClick}>
      {label}
    </option>
  );
};

export default Option;
