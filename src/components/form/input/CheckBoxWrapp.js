import React from "react";
import { useController } from "react-hook-form";
import { BsCheck } from "react-icons/bs";

const CheckBoxWrapp = ({ control, children, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
  });

  return (
    <label className="checkbox-wrapper flex gap-3 items-center cursor-pointer">
      <input
        className="checkbox-control hidden"
        type="checkbox"
        checked={field?.value}
        {...field}
        {...props}
      />
      <span className="checkbox-span rounded-md  flex items-center justify-center">
        {field?.value === true && <BsCheck className="icon-check "></BsCheck>}
      </span>
      {children}
    </label>
  );
};

export default CheckBoxWrapp;
