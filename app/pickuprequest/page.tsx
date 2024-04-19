"use client"
import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'



  
const people = [
  {
    id: 1,
    name: 'General Type',
    
  },
  {
    id: 2,
    name: 'DG Cargo',
  },
 
]

const pickuprequest = () => {
  
  return (
    <div>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src={"/assets/logo/logo.webp"}
            alt="Your Company"
            width={1002}
            height={25}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="lg:flex  ">

           
            <div className='px-1' >
              <label htmlFor="Form_port" className="block text-sm font-medium leading-6 text-gray-900">
              From Port
              </label>
              <div className="mt-2">
                <input
                  id="Form_port"
                  name="Form_port"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='px-1'>
              <div className="flex items-center justify-between">
                <label htmlFor="To_Port" className="block text-sm font-medium leading-6 text-gray-900">
                To Port
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="To_Port"
                  name="To_Port"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>
            {/*  */}
            <div className="lg:flex  ">

           
<div className='px-1' >
  <label htmlFor="Weight_Kg" className="block text-sm font-medium leading-6 text-gray-900">
  Weight in Kg
  </label>
  <div className="mt-2">
    <input
      id="Weight_Kg"
      name="Weight_Kg"
      type="text"
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
</div>

<div className='px-1'>
  <div className="flex items-center justify-between">
    <label htmlFor="Phone" className="block text-sm font-medium leading-6 text-gray-900">
    Phone
    </label>
    {/* <div className="text-sm">
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
        Forgot password?
      </a>
    </div> */}
  </div>
  <div className="mt-2">
    <input
      id="Phone"
      name="Phone"
      type="number"
      required
      className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
</div>
</div>
{/*  */}
<div className="lg:flex  ">

           
<div className='px-1' >
  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
  Date
  </label>
  <div className="mt-2">
    <input
      id="date"
      name="date"
      type="date"
      required
      className="block lg:w-[180px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
</div>

<div className='px-1'>
  <div className="flex items-center justify-between">
    <label htmlFor="Cargo_Type" className="block text-sm font-medium leading-6 text-gray-900">
    Cargo Type
    </label>
    {/* <div className="text-sm">
      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
        Forgot password?
      </a>
    </div> */}
  </div>
  <div className="mt-2">
    <select 
      id="Cargo Type"
      name="Cargo Type"
      required
      className="block lg:w-[180px] h-[40px] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >

{people.map((person, index) => (
    <option key={index} value={person.name}>
      {person.name}
    </option>
  ))}
  {/* <option value="option2">Option 2</option> */}
    </select>
  </div>
</div>
</div>
<div className='px-1' >
  <label htmlFor="textarea" className="block text-sm font-medium leading-6 text-gray-900">
  Pickup address
  </label>
  <div className="mt-2">
    <textarea
      id="textarea"
      name="text"
      
      required
      className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>


</div>
<div className='px-1' >
  <label htmlFor="textarea" className="block text-sm font-medium leading-6 text-gray-900">
  Pickup address
  </label>
  <div className="mt-2 flex">
  <input type="radio" id="yes" name="radioGroup" className="radio-button   "/>
<label className='px-3' htmlFor="yes">yes </label>

<input type="radio" id="no" name="radioGroup" className="radio-button   "/>
<label className='px-3' htmlFor="no">No</label>
  </div>


</div>
<div>
  
</div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black border-solid border-[2px] border-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submite
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default pickuprequest