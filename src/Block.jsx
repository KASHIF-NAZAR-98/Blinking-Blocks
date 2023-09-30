import React from "react";

const Block = ({ id, onClick, isActive, text }) => {
  const color = isActive ? "bg-orange-800" : "bg-gray-500";

  return (
    <div
      className={`w-16 h-16 m-2 text-white cursor-pointer ${color}`}
      onClick={() => onClick(id)}
    >
      <span className="flex justify-center pt-6">{text}</span>
    </div>
  );
};

export default Block;
