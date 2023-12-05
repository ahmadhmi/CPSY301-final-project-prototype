import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
    drugSelected: "",
    patientProfile: "",
    prescriber: "",
    sig: "",
    dispenseQuantity: "",
    repeats: "",
    daysSupply: "",
  };

  const { register, handleSubmit } = useForm();

  const [studentName, setStudentName] = useState(studentForGrade[0]);
  const [rx, setRx] = useState("");
  const [drugName, setDrugName] = useState("");
  const [grades, setGrades] = useState(grade);
  const [labResult, setLabResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handFormSubmit = (Data) => {
    const grade = Data;
    console.log(grade);
    setLabResult((previousLabResult) => [...previousLabResult, grade]);
    setStudentForGrade(
      studentForGrade.filter((student) => student !== studentName)
    );
    setStudentName(studentForGrade[0]);
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
        onSubmit={handleSubmit(handFormSubmit)}
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
            {...register("name")}
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
            {...register("Rx#")}
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
            {...register("DrugName")}
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
                id={criterion}
                className=" bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register(criterion)}
                required
              >
                <option value="" disabled selected>
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
            type="button"
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
                <div className="w-1/6">{rx}</div>
                <div className="w-1/6">{drugName}</div>
                <div className="w-1/6">{grades.drugSelected}</div>
                <div className="w-1/6">{grades.patientProfile}</div>
                <div className="w-1/6">{grades.prescriber}</div>
                <div className="w-1/6">{grades.sig}</div>
                <div className="w-1/6">{grades.dispenseQuantity}</div>
                <div className="w-1/6">{grades.repeats}</div>
                <div className="w-1/6">{grades.daysSupply}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Lab;
