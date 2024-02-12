import React from "react";

const Button = ({ children, ...rest }) => {
  //the children prop represents data between the button tag element
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
