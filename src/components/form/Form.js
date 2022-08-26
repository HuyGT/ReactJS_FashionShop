import React from "react";

const Form = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {children}
    </form>
  );
};

export default Form;
