"use client";

import React, { useState, useEffect } from "react";

export default function bodyM() {
  const [data, setData] = useState([]); // Change to an array to hold multiple records
  const [det, setDet] = useState([]);

  const fetchEmail = async () => {
    try {
      const Em = await fetch(`http://localhost:9000/api/user`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await Em.json();
      setDet(result);
      return result; // Return the result to be used later
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const emailData = await fetchEmail();
      const email = emailData.email;

      const grievancesData = await fetch(`http://localhost:8000/allgrievances/${email}`);
      const result = await grievancesData.json();
      setData(result);
      console.log(result); // Display the result in the console
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Perform the delete request for the specific ID
      await fetch(`http://localhost:8000/grievances/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // After successful deletion, fetch the updated data
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEmail();
    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col items-center mb-4">
        <p className="text-black font-bold mb-2">Details of the project</p>
        <form>
          <button type="button" onClick={fetchData} className="bg-green-200 text-black">
            Get Data
          </button>
          <table className="shadow-lg relative top-20 flex justify-center">
            <tbody>
              <tr>
                <th className="bg-green-700 border text-left px-8 py-4">Grievances type</th>
                <th className="bg-green-700 border text-left px-8 py-4">description</th>
                <th className="bg-green-700 border text-left px-8 py-4">Status</th>
                <th className="bg-green-700 border text-left px-8 py-4">Created Date</th>
                <th className="bg-green-700 border text-left px-8 py-4">Cancel Grievances</th>
              </tr>
              {data.map((grievance) => (
                <tr className="text-black bg-green-200" key={grievance.id}>
                  <td className="border px-8 py-4">{grievance.g_type}</td>
                  <td className="border px-8 py-4">{grievance.description}</td>
                  <td className="border px-8 py-4">{grievance.status}</td>
                  <td className="border px-8 py-4">{grievance.date}</td>
                  <td className="border px-8 py-4">
                    <button className="hover:text-red-300" onClick={() => handleDelete(grievance.id)}>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
