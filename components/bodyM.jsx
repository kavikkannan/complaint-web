"use client"

import React, {Fragment, useState, useEffect } from "react";
import Create from '@/components/Create_task'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function bodyM() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/user/");
        if (response.ok) {
          const result = await response.json();
          setData(result); 
          /* setLoading(false); */ 
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>     
      <form>
        <table className="shadow-lg relative top-20 flex justify-center bg-black">
          <tbody>
            <tr>
              <th className="bg-green-700 border text-left px-8 py-4">Company</th>
              <th className="bg-green-700 border text-left px-8 py-4">Contact</th>
              <th className="bg-green-700 border text-left px-8 py-4">Country</th>
            </tr>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-8 py-4">{item.company}</td>
                <td className="border px-8 py-4">{item.contact}</td>
                <td className="border px-8 py-4">{item.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div> 
  )
}