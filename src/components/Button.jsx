import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <div
      onClick={() => rest.handler(children)}
      className={rest ? rest.className + " btn" : "btn"}
    >
      {children}
    </div>
  );
};

export default Button;
