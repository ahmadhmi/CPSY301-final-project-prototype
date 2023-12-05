import React from "react";
import Block from "./Block";
import { useUserAuth } from "../_utils/auth-context";

const SideBar = ({ handleBlockClick, listOfBlocks }) => {
  const { firebaseSignOut } = useUserAuth();
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  return (
    <div className="bg-black w-full h-screen p-3 flex flex-col gap-4 border-r-2 ">
      {listOfBlocks.map((block) => (
        <Block
          blockName={block}
          handleBlockClick={() => handleBlockClick(block)}
        />
      ))}
      <div className="mt-4">
        <button
          className="bg-blue-500 w-full h-20 border-blue-800 rounded-lg text-xl font-bold text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
