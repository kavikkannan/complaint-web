'use client';
import React, {useEffect,Fragment, useState } from 'react';
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
export default function BodyM() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('');
  const [det, setDet] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {

        const data = await fetch(`http://localhost:8000/grievances/`);
        const result1 = await data.json();
        console.log(result1);
        setData(result1);
    } catch (error) {
      console.error(error);
    }
  };
  const updateStatus = async (id, status) => {
    try {
      // API call to update the status
      const response = await fetch(`http://localhost:8000/Ugrievances/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        // If the status is updated successfully, fetch the updated data
        fetchData();
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error(error);
    }
  };

  


  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col items-center mb-4">
        <p className="text-black font-bold mb-2">Details of the project</p>
       
        <form>
          {/* <Listbox value={selected} onChange={setSelected}>
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
            </Listbox> */}
            <br/>
            <button type='button' onClick={fetchData} className="bg-green-200 text-black">Get Data</button>

          <table className="shadow-lg relative top-20 flex justify-center">
            <tbody>
              <tr>
              <th className="bg-green-700 border text-left px-8 py-4">Email</th>
                <th className="bg-green-700 border text-left px-8 py-4">Grievances type</th>
                <th className="bg-green-700 border text-left px-8 py-4">description</th>
                <th className="bg-green-700 border text-left px-8 py-4">Status</th>
                <th className="bg-green-700 border text-left px-8 py-4">Created Date</th>
              </tr>
              {data.map((item) => (
                  <tr className="text-black bg-green-200" key={item.id}>
                    <td className="border px-8 py-4">{item.email}</td>
                    <td className="border px-8 py-4">{item.g_type}</td>
                   <td className="border px-8 py-4">{item.description}</td> 
                   <td className="border px-8 py-4">
                
                <select
                  value={item.status}
                  onChange={(e) => updateStatus(item.id, e.target.value)}
                  className="border py-1 px-2"
                >
                  <option value="Open">{item.status}</option>
                  <option value="In Progress">On Hold</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>

                    <td className="border px-8 py-4">{item.date}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );

}
