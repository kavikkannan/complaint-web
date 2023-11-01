'use client'
import React, {Fragment, useState } from 'react';
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon,CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Grievances_types = [
  {
    id: 1,
    name: 'Communication',
    },
  {
    id: 2,
    name: 'Technical',
    },
    {
      id: 3,
      name: 'Workload and Stress',
      },
      {
        id: 4,
        name: 'Others',
        },
  
]

function YourComponent() {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState('');
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const handleSubmit = async() => {
    try{
      const log = await fetch(`http://localhost:9000/api/login`, {
        method: "POST",
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: 'include',
      })

      closeForm();
    }catch{

    }
    
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
          <h2 className="text-black text-xl font-semibold mb-4">Enter Grivences Details</h2>
          <div className="relative bottom-12 text-right">
            <button onClick={closeForm} className="text-black px-4 py-2 rounded-md">
              Close
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          <div className=''>
          <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                
                <span className="ml-3 block truncate">{selected.name?`${selected.name}`:'select the type of grivences'}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Grievances_types.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-green-300 text-black' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                    
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
            </Listbox>
           </div>
           <br/>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter The problem(200 Words)"
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