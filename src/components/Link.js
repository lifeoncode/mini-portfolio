import React from "react";

// Component
const Link = ({ href, classname, text }) => {
  return (
    <a href={href} className={classname}>
      {text}
    </a>
  );
};

// Component default props
Link.defaultProps = {
  classname: "link",
};

// export the component
export default Link;
