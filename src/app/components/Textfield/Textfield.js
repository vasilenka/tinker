import styles from './Textfield.module.scss';
import React, { useState } from 'react';
import classnames from 'classnames';

import FieldLabel from './../FieldLabel/FieldLabel';
import FieldInput from './../FieldInput/FieldInput';
import FieldHint from './../FieldHint/FieldHint';

const Textfield = ({
  id,
  label,
  secondaryLabel,
  tertiaryLabel,
  className,
  placeholder,
  value,
  defaultValue,
  hint,
  small,
  type,
  inline,
  disabled,
  required,
  yupShape,
  message,
  tone,
  onChange,
  onBlur,
  onFocus,
  onClick,
  ...restProps
}) => {
  const [toneHook, setToneHook] = useState(tone || '');
  const [messageHook, setMessageHook] = useState(message || '');
  const [valueHook, setValueHook] = useState(value || '');

  const handleChange = value => {
    setValueHook(value);
    onChange(value, type);
  };

  const setMessage = message => setMessageHook(message);
  const setTone = tone => setToneHook(tone);

  return (
    <div
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [className]: className
      })}
    >
      <FieldLabel
        id={id}
        label={label}
        small={small}
        inline={inline}
        secondaryLabel={secondaryLabel}
        tertiaryLabel={tertiaryLabel}
      />
      <FieldInput
        id={id}
        type={type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        small={small}
        value={valueHook}
        setMessage={setMessage}
        tone={toneHook}
        setTone={setTone}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        yupShape={yupShape}
      />

      {toneHook && messageHook && (
        <FieldHint tone={toneHook}>{messageHook}</FieldHint>
      )}
    </div>
  );
};

export default Textfield;
