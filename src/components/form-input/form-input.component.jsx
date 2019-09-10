import React from "react";

const FormInput = ({handleChange, label, ...otherProps}) =>(
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {
            label ? 
            (<label className={`${props.value.length ? 'shrink' : ''}` form-input-label}> 

            </label>)
        }
    </div>
)