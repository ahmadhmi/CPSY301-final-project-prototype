import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Lab = ({ studentList, labName, blockName }) => {
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

  const { register, handleSubmit, reset } = useForm();

  const [labResult, setLabResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handFormSubmit = (Data) => {
    const formResult = Data;
    setLabResult((previousLabResult) => [...previousLabResult, formResult]);
    setStudentForGrade(
      studentForGrade.filter((student) => student !== formResult.name)
    );
    reset();
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
        <div className="flex flex-row gap-3 justify-center">
          <label className=" text-gray-700 text-4xl font-bold self-center ">
            {blockName}
          </label>
          <label className=" text-gray-700 text-4xl font-bold self-center ">
            {labName}
          </label>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
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
            htmlFor="Rx#"
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
            htmlFor="DrugName"
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
                <option value="pass" selected>
                  Pass
                </option>
                <option value="fail">Fail</option>
              </select>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {studentForGrade.length > 0 && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          )}
          {studentForGrade.length == 0 && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              href="#"
              onClick={handleShowResult}
            >
              Print Results
            </button>
          )}
        </div>
      </form>
      {showResult && (
        <div className="flex flex-col items-center mt-20">
          <label className=" text-gray-700 text-4xl font-bold self-center mb-10">
            Lab Results
          </label>
          <div>
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-600">
                <tr>
                  <th className="px-4 py-2 font-semibold text-left">
                    Student Name
                  </th>
                  <th className="px-4 py-2 font-semibold text-left">Rx#</th>
                  <th className="px-4 py-2 font-semibold text-left">
                    Drug Name
                  </th>
                  <th className="px-4 py-2 font-semibold text-left">
                    Drug Selected
                  </th>
                  <th className="px-4 py-2 font-semibold text-left">
                    Patient Profile
                  </th>
                  <th className="px-4 py-2 font-semibold text-left">
                    Prescriber
                  </th>
                  <th className="px-4 py-2 font-semibold text-left">Sig</th>
                  <th className="px-4 py-2 font-semibold text-left">
                    Dispense Quantity
                  </th>
                  <th className="px-4 py-2 font-semibold text-left">Repeats</th>
                  <th className="px-4 py-2 font-semibold text-left">
                    Days Supply
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {labResult.map((grade, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{grade["name"]}</td>
                    <td className="border px-4 py-2">{grade["Rx#"]}</td>
                    <td className="border px-4 py-2">{grade["DrugName"]}</td>
                    <td className="border px-4 py-2">
                      {grade["drugSelected"]}
                    </td>
                    <td className="border px-4 py-2">
                      {grade["patientProfile"]}
                    </td>
                    <td className="border px-4 py-2">{grade["prescriber"]}</td>
                    <td className="border px-4 py-2">{grade["sig"]}</td>
                    <td className="border px-4 py-2">
                      {grade["dispenseQuantity"]}
                    </td>
                    <td className="border px-4 py-2">{grade["repeats"]}</td>
                    <td className="border px-4 py-2">{grade["daysSupply"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lab;
