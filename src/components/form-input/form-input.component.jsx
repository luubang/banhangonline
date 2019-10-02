import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, footerInput, ...otherProps }) => (
  <div className='group'>
    <input className={`${footerInput ? "input-footer" : ""} form-input`} onChange={handleChange} {...otherProps}  />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
