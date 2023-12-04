import React from "react";
import Block from "./Block";

const SideBar = ({handleBlockClick, listOfBlocks}) => {


  return (
    <div className="bg-red-400 w-full p-2 flex flex-col gap-2 ">
      {listOfBlocks.map((block) => (
        <Block blockName={block} handleBlockClick={() => handleBlockClick(block)} />
      ))}
    </div>
  );
};

export default SideBar;
