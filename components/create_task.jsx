'use client'
import React, { useState } from 'react';
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/solid";
import Link from 'next/link';

function YourComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const data = [
    { ID: 1, name: "Option 1" },
    { ID: 2, name: "Option 2" },
    { ID: 3, name: "Option 3" },
  ];

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', projectName, employeeName, taskName, deadline);
    closeForm();
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-start mb-4">
      <div>
        <Link
  href={'/home_employe'}
       className='text-green-200'>
          go back
        </Link>
      </div>
    <p className="text-green-200 font-bold mb-2">To fill Grivances details, click open Grivences form</p>
    <button
      className="bg-green-200 hover:bg-teal-600 text-black font-bold py-2 px-4 rounded w-30 h-10"
      onClick={openForm}
    >
      Open Grivences Form
    </button>
    {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-70">
        <div className="bg-green-200 p-4 rounded-md shadow-md">
          <h2 className="text-black text-xl font-semibold mb-4">Enter Task Details</h2>
          <div className="relative bottom-12 text-right">
            <button onClick={closeForm} className="text-black px-4 py-2 rounded-md">
              Close
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full p-2 border rounded-md text-black"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full p-3 border rounded-md text-black"
                required
              />
            </div>
            <div className="text-right">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  )
}

export default YourComponent;