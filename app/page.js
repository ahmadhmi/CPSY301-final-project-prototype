"use client"



import Image from "next/image";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import { useState } from "react";
import Lab from "./components/Lab";

export default function Home() {

  const [data, setData] = useState([
    {
      blockName: "Block-1",
      listOfWeeks: [{weekName:"Week-1", labs: ["lab 1","lab 2"] }, {weekName:"Week-2", labs: ["lab 3","lab 4"] },{weekName:"Week-3", labs: ["lab 5","lab 6"] }],
      students:["Ahmad Heshmati", "Syed Jawad Raza", "John Dao", "Yuta Bokuchi", "Qiaomu Lei"]
    },
    {
      blockName: "Block-2",
      listOfWeeks: [{weekName:"Week-1", labs: ["lab 1","lab 2"] }, {weekName:"Week-2", labs: ["lab 3","lab 4"] },{weekName:"Week-3", labs: ["lab 5","lab 6"] }],
      students:["Ahmad Heshmati", "Syed Jawad Raza", "John Dao", "Yuta Bokuchi", "Qiaomu Lei"]

    },
    {
      blockName: "Block-3",
      listOfWeeks: [{weekName:"Week-5", labs: ["lab 1","lab 2"] }, {weekName:"Week-6", labs: ["lab 3","lab 4"] },{weekName:"Week-7", labs: ["lab 5","lab 6"] }],
      students:["Ahmad Heshmati", "Syed Jawad Raza", "John Dao", "Yuta Bokuchi", "Qiaomu Lei"]
    },
  ]);

  const [selectedBlock, setSelectedBlock] = useState("Block-1");

  const [listOfWeeks, setListOfWeeks] = useState([]);

  const [showLab, setShowLab] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState([]);

  const [selectedLab, setSelectedLab] = useState("");

  const handleBlockClicked = (blockName) => {
    setSelectedBlock(blockName);
    handleUpdateStudent(selectedBlock);
    const selectedBlockData = data.find((block) => block.blockName === blockName);
    console.log(selectedBlockData);
    setListOfWeeks(selectedBlockData.listOfWeeks);
  }

  const handleUpdateStudent = (blockName) => {
    const studentList = data.find((block) => block.blockName === blockName).students;
    setSelectedStudent(studentList);
  };

  const onGradeLab = (week, labName) => {
    setSelectedLab(labName);
    setShowLab(true);
  };

  const onDeleteLab = (weekName, labName) => {
    setData(data.map((block) => {
      if (block.blockName === selectedBlock) {
        block.listOfWeeks.map((week) => {
          if (week.weekName === weekName) {
            week.labs = week.labs.filter((lab) => lab !== labName);
          }
        });
      }
      return block;
    }));
  };

  return (
    <main className="flex bg-slate-50 h-full w-screen">
      <div className="w-1/6 h-full ">
        <SideBar handleBlockClick={handleBlockClicked} listOfBlocks={data.map((object) => object.blockName )} />
      </div>
      <div className="w-5/6">
        <MainPage onGradeLab={onGradeLab} listOfWeeks={listOfWeeks} onDelete={onDeleteLab}/>
        {showLab && <Lab studentList={selectedStudent} labName={selectedLab} />}
      </div>
    </main>
  );
}
