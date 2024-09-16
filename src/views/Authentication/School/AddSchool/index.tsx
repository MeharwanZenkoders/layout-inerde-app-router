import { ArrowRight, ChevronDown, Flag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AddSchool = () => {
  return (
    <div className='container'>
      <div>
        <div className='flex items-start justify-start font-medium mt-1'>
          <Link href='/school'>
            <ArrowRight className='rotate-180' />
          </Link>
          <span className='px-2'>Back</span>
        </div>
        <div className='flex items-start justify-items-start mt-5'>
          <h1 className='text-xl font-bold'>Add School</h1>
        </div>
      </div>

      <div className='flex grid-cols-3 justify-between mt-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full'>
          {/* School Name */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              School Name<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Enter School Name'
              className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
            />
          </div>

          {/* First Name */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              First Name<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Enter First Name'
              className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
            />
          </div>

          {/* Last Name */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              Last Name<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Enter Last Name'
              className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
            />
          </div>

          {/* Email */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              Email<span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
            />
          </div>

          {/* Contact Number */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              Contact Number<span className='text-red-500'>*</span>
            </label>
            <div className='flex items-center mt-1 border border-gray-300 rounded-md p-2'>
              <Flag className='mr-2' />
              <input
                type='tel'
                placeholder='+44 XXXX XXXX'
                className='flex-1 bg-gray-100 border-none focus:ring-0'
              />
            </div>
          </div>

          {/* Address */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              Address<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Enter Address'
              className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
            />
          </div>

          {/* Country */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              Country<span className='text-red-500'>*</span>
            </label>
            <div className='relative mt-1'>
              <select className='block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900 appearance-none'>
                <option>Select Country</option>
                <option>USA</option>
                <option>UK</option>
                {/* Add more countries */}
              </select>
              <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
            </div>
          </div>

          {/* City */}
          <div className='w-full'>
            <label className='block text-sm font-medium text-gray-700'>
              City<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Select City'
              className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-end'>
        <button
          type='submit'
          className='bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddSchool;
