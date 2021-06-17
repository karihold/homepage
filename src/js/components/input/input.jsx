import React from "react";
import "./input.scss";

const Input = ({ onChange, type = "text", name, placeholder, isRequired, register, validationMessage, icon }) => {
  return (
    <label className="input-label">
      <span className="input-icon-wrapper">
        {icon && <img className="input-icon" src={require(`icons/${icon}.svg`).default} alt={`${placeholder} icon`} />}
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={isRequired}
          {...register(name, { required: isRequired })}
        />
      </span>

      {validationMessage && <span>{validationMessage}</span>}
    </label>
  );
};

export default Input;
