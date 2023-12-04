import React from "react";
import { useState } from "react";

const Lab = ({ studentList, labName }) => {
  const [studentForGrade, setStudentForGrade] = useState(studentList);
  const gradingArea = [
    "drugSelected",
    "patientProfile",
    "prescriber",
    "sig",
    "dispenseQuantity",
    "repeats",
    "daysSupply",
  ];

  const grade = {
    drugSelected: "select the grade",
    patientProfile: "",
    prescriber: "",
    sig: "",
    dispenseQuantity: "",
    repeats: "",
    daysSupply: "",
  };

  const [studentName, setStudentName] = useState("");
  const [rx, setRx] = useState("");
  const [drugName, setDrugName] = useState("");
  const [grades, setGrades] = useState(grade);
  const [labResult, setLabResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handFormSubmit = (e) => {
    e.preventDefault();
    const grade = {
      studentName,
      rx,
      drugName,
      grades,
    };
    setLabResult((previousLabResult) => [...previousLabResult, grade]);
    console.log(grade);
    setStudentForGrade(
      studentForGrade.filter((student) => student !== studentName)
    );
    setStudentName("");
    setRx("");
    setDrugName("");
    setGrades(grade);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form
        onSubmit={handFormSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-col items-center">
          <label className=" text-gray-700 text-4xl font-bold self-center ">
            {labName}
          </label>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="name"
          >
            Student Name
          </label>
          <select
            id="name"
            className=" bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          >
            <option disabled>Select the student</option>
            {studentForGrade.map((student) => (
              <option key={student} value={student}>
                {student}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Rx#"
          >
            Rx#
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Rx#"
            type="text"
            placeholder="Enter the Rx#"
            value={rx}
            onChange={(e) => setRx(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="DrugName"
          >
            Drug Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="DrugName"
            type="text"
            placeholder="Enter the Drug Name"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6 grid grid-cols-3 gap-2 bg-slate-800 p-7 rounded-lg">
          {gradingArea.map((criterion, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-2  space-x-10 p-5 border rounded-md"
            >
              <label className=" text-white text-lg font-bold mb-2">
                {criterion}
              </label>
              <select
                className=" bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={grades[criterion]}
                onChange={(e) =>
                  setGrades((previousGrades) => ({
                    ...previousGrades,
                    [criterion]: e.target.value,
                  }))
                }
                required
              >
                <option value="Select the grade" disabled selected>
                  Select the grade
                </option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </select>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            href="#"
            onClick={handleShowResult}
            disabled={studentForGrade.length > 0}
          >
            Print Results
          </button>
        </div>
      </form>
      {showResult && (
        <div className="flex flex-col items-center">
          <label className=" text-gray-700 text-4xl font-bold self-center ">
            Lab Results
          </label>
          <div>
            {labResult.map((grade) => (
              <div className="flex flex-row gap-2 items-center text-slate-950">
                <div className="w-1/6">{grade.studentName}</div>
                <div className="w-1/6">{grade.rx}</div>
                <div className="w-1/6">{grade.drugName}</div>
                <div className="w-1/6">{grade.grades.drugSelected}</div>
                <div className="w-1/6">{grade.grades.patientProfile}</div>
                <div className="w-1/6">{grade.grades.prescriber}</div>
                <div className="w-1/6">{grade.grades.sig}</div>
                <div className="w-1/6">{grade.grades.dispenseQuantity}</div>
                <div className="w-1/6">{grade.grades.repeats}</div>
                <div className="w-1/6">{grade.grades.daysSupply}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lab;
