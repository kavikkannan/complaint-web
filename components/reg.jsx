"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import Header_LPage from '@/components/loading';

export default function login() {
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setUsername] = useState('');
  const router = useRouter();
  const signup = async () => {
    try {

      setLoading(true);
      
      const response = await fetch(`http://localhost:9000/api/register`, {
        method: "POST",
        mode:"cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          position,
        })
      });

      if (response.ok) {
        console.log("success");
        router.push("/signin");
      } else {
        alert('not success');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };  
    return (
      <>
      {loading ? (
          <div className="relative">
          {loading && <Header_LPage />} {/* Display loading animation when loading is true */}
        </div>
      ) : (
        <div className="absolute  w-full bg-black-300  flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className=" absolute top-10 right-13 sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/"><img
              className=" text-green-200 mx-auto h-10 w-auto"
              src=""
              alt="Your Company"
            />
            </Link>
          </div>
          <div className=" relative bottom-20 sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className=" mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-200">
              Register your account
            </h2>
          </div>
  
          <div className="relative bottom-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-green-200">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-black shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-green-200">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username "
                    type="text"
                    autoComplete="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-black shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-green-200">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 p-2 text-black shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
  <label className="block text-sm font-medium leading-6 text-green-200">Position</label>
  <div className="mt-2">
    <label className="inline-flex items-center ">
      <input
        type="radio"
        className="form-radio"
        name="position"
        value="employe"
       checked={position === 'employe'}
        onChange={() => setPosition('employe')}
      />
      <span className="ml-2 text-green-200 hover:text-green-400">Employe</span>
    </label>
    <label className="relative inline-flex items-center left-2">
      <input
        type="radio"
        className="form-radio"
        name="position"
        value="manager"
       checked={position === 'manager'}
       onChange={() => setPosition('manager')}
      />
      <span className="ml-2 text-green-200 hover:text-green-400">Manager</span>
    </label>
  </div>
</div>
              
            </form>
            <br/>
            <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  onClick={signup}
                >
                   Register
                </button>
              </div>
  
            <p className="mt-10 text-center text-sm text-green-500">
              Already have a account?{' '}
              <a href="signin" className="font-semibold leading-6 text-green-200 hover:text-green-500">
                Sign In
              </a>
            </p>
          </div>
        </div>
        
      )}
        </>
    );
  }
  