import React from "react";

const Box = ({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "blue",
}) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor,
        }}
      ></div>
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
};
export default Box;
