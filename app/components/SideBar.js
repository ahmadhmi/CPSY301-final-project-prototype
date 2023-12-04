import React from "react";
import Block from "./Block";

const SideBar = ({handleBlockClick, listOfBlocks}) => {


  return (
    <div className="bg-black w-full h-screen p-2 flex flex-col gap-2 border-r-2 ">
      {listOfBlocks.map((block) => (
        <Block blockName={block} handleBlockClick={() => handleBlockClick(block)} />
      ))}
    </div>
  );
};

export default SideBar;
