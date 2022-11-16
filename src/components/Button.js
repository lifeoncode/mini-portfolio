import React from "react";

// Component
function Button({ text, classname, id }) {
  return (
    <button className={classname} id={id}>
      {text}
    </button>
  );
}

// Component default props
Button.defaultProps = {
  classname: "btn",
};

// export the component
export default Button;
