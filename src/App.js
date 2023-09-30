import React, { useState, useEffect } from "react";
import Block from "./Block";
import "./App.css";

const App = () => {
  const [blocks, setBlocks] = useState([
    { id: 1, isActive: false, text: "Block 1" },
    { id: 2, isActive: false, text: "Block 2" },
    { id: 3, isActive: false, text: "Block 3" },
    { id: 4, isActive: false, text: "Block 4" },
  ]);

  const handleClick = (id) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, isActive: true } : block
      )
    );

    setTimeout(() => {
      setBlocks((prevBlocks) =>
        prevBlocks.map((block) =>
          block.id === id ? { ...block, isActive: false } : block
        )
      );
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlocks((prevBlocks) => {
        const reversedBlocks = [...prevBlocks].reverse();
        return reversedBlocks.map((block) => ({ ...block, isActive: false }));
      });
    }, 4000);

    



    return () => clearTimeout(timeout);
  }, [blocks]);

  return (
    <div className="flex justify-center pt-36">
      {blocks.map((block) => (
        <Block
          key={block.id}
          id={block.id}
          onClick={handleClick}
          isActive={block.isActive}
          text={block.text}
        />
      ))}
    </div>
  );
};

export default App;
