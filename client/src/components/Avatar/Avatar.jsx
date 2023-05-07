import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  cursor,
  borderRadius,
  fontSize,
  textDecoration,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration,
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
