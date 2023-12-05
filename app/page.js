"use client";

import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import { useState } from "react";
import Lab from "./components/Lab";
import { useUserAuth } from "./_utils/auth-context";
import blockData from "./Data/Blocks";

export default function Home() {
  const { user, gitHubSignIn } = useUserAuth();
  console.log(user);

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  const [data, setData] = useState(blockData);

  const [selectedBlock, setSelectedBlock] = useState("Block-1");

  const [listOfWeeks, setListOfWeeks] = useState([]);

  const [showLab, setShowLab] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState([]);

  const [selectedLab, setSelectedLab] = useState("");

  const handleBlockClicked = (blockName) => {
    setSelectedBlock(blockName);
    handleUpdateStudent(selectedBlock);
    const selectedBlockData = data.find(
      (block) => block.blockName === blockName
    );
    setListOfWeeks(selectedBlockData.listOfWeeks);
    setShowLab(false);
  };

  const handleUpdateStudent = (blockName) => {
    const studentList = data.find(
      (block) => block.blockName === blockName
    ).students;
    setSelectedStudent(studentList);
  };

  const onGradeLab = (week, labName) => {
    setSelectedLab(labName);
    setShowLab(true);
  };

  const onDeleteLab = (weekName, labName) => {
    setData(
      data.map((block) => {
        if (block.blockName === selectedBlock) {
          block.listOfWeeks.map((week) => {
            if (week.weekName === weekName) {
              week.labs = week.labs.filter((lab) => lab !== labName);
            }
          });
        }
        return block;
      })
    );
  };

  return (
    <main>
      {user ? (
        <div className="flex h-screen w-screen">
          <div className="w-1/6 h-full ">
            <SideBar
              handleBlockClick={handleBlockClicked}
              listOfBlocks={data.map((object) => object.blockName)}
            />
          </div>
          <div className="w-5/6">
            {!showLab && (
              <MainPage
                onGradeLab={onGradeLab}
                listOfWeeks={listOfWeeks}
                onDelete={onDeleteLab}
              />
            )}
            {showLab && (
              <Lab
                studentList={selectedStudent}
                labName={selectedLab}
                blockName={selectedBlock}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-60">
          <button
            className="bg-blue-500 w-52 h-20 border-blue-800 rounded-lg text-xl font-bold"
            onClick={handleSignIn}
          >
            Log In
          </button>
        </div>
      )}
    </main>
  );
}
