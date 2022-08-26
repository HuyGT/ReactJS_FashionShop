import React from "react";
import { useController } from "react-hook-form";
import "./style.scss";

const Input = ({ label, control, type, defaultValue, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: defaultValue || "",
  });

  return (
    <div className="input-wrapper relative">
      {label ? (
        <label htmlFor={props.id || props.name} className="lable">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        type={type || "text"}
        className="input-control"
        {...props}
        {...field}
      />
    </div>
  );
};

export default Input;
