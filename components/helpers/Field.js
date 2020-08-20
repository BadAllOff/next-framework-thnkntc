import React from "react";

const Field = (props) => {
  const {
    name,
    label,
    value,
    type,
    inputType: InputType,
    handleChange,
    hint,
    options = {},
  } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <InputType
        {...options}
        className="form-control"
        name={name}
        value={value}
        type={type}
        onChange={(e) => handleChange(name, e)}
      />
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  );
};

export default Field;
