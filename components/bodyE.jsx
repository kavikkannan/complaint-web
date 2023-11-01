"use client";

import React, { Fragment, useState, useEffect } from "react";


export default function bodyM() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('');
  

  const fetchData = async () => {
    try {
      const log = await fetch(`http://localhost:9000/api/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
      });

      if (log.ok) {
        const result = await log.json();
        setData(result);
        console.log(result); // Display the result in the console
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col items-center mb-4">
        <p className="text-black font-bold mb-2">Details of the project</p>

        <form>
          <button onClick={fetchData}>Get Data</button>
          <table className="shadow-lg relative top-20 flex justify-center">
            <tbody>
              <tr>
                <th className="bg-green-700 border text-left px-8 py-4">Project Name</th>
                <th className="bg-green-700 border text-left px-8 py-4">Task</th>
                <th className="bg-green-700 border text-left px-8 py-4">Deadline</th>
              </tr>
                  <tr className="text-black bg-green-200" key={data.id}>
                    <td className="border px-8 py-4">{data.email}</td>
                   <td className="border px-8 py-4">{data.name}</td> 
                    <td className="border px-8 py-4">{data.Position}</td>
                  </tr>
             
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );

}
