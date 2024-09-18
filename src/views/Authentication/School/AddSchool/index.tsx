'use client';
import { Form, Field, Formik } from 'formik';
import { ArrowRight, ChevronDown, Flag } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Persist } from 'formik-persist';

const schoolSchema = Yup.object().shape({
  schoolName: Yup.string().required('School Name is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|pk)$/, 'Email must end with .com or .pk')
    .required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
});

interface Schools {
  id: number;
  schoolName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
}

const generateId = (existing: number[]): number => {
  let newId = existing.length ? Math.max(...existing) + 1 : 1;
  while (existing.includes(newId)) {
    newId += 1;
  }
  return newId;
};

const AddSchool = () => {
  const [newSchool, setNewSchool] = useState<Schools[]>([
    {
      "id": 1,
      "schoolName": "Greenfield High School",
      "firstName": "Greenfield",
      "lastName": "High School",
      "email": "info@greenfieldhigh.edu",
      "phone": "+1-555-123-4567",
      "address": "123 Greenfield Avenue",
      "country": "USA",
      "city": "New York"
    },
    {
      "id": 2,
      "schoolName": "Sunrise Elementary School",
      "firstName": "Sunrise",
      "lastName": "Elementary School",
      "email": "contact@sunriseelementary.edu",
      "phone": "+1-555-987-6543",
      "address": "456 Sunrise Street",
      "country": "Canada",
      "city": "Toronto"
    },
    {
      "id": 3,
      "schoolName": "Riverdale Academy",
      "firstName": "Riverdale",
      "lastName": "Academy",
      "email": "info@riverdaleacademy.edu",
      "phone": "+44-555-321-0987",
      "address": "789 Riverdale Lane",
      "country": "UK",
      "city": "London"
    },
    {
      "id": 4,
      "schoolName": "Lakeside College",
      "firstName": "Lakeside",
      "lastName": "College",
      "email": "contact@lakesidecollege.edu",
      "phone": "+61-555-654-3210",
      "address": "101 Lakeside Boulevard",
      "country": "Australia",
      "city": "Sydney"
    },
    {
      "id": 5,
      "schoolName": "Mountainview Institute",
      "firstName": "Mountainview",
      "lastName": "Institute",
      "email": "info@mountainviewinstitute.edu",
      "phone": "+49-555-789-1234",
      "address": "202 Mountainview Road",
      "country": "Germany",
      "city": "Berlin"
    }
  ]);

  const initialValues: Schools = {
    id: 0,
    schoolName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    city: '',
  };

  const handleSubmit = (values: Schools, { resetForm }: { resetForm: () => void }) => {
    console.log('Form Submitted with values:', values);
  
    // Generate a new unique ID
    const newSchoolData = {
      id: generateId(newSchool.map((sch) => sch.id)),
      schoolName: values.schoolName,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      address: values.address,
      country: values.country,
      city: values.city,
    };
  
    
    const storedSchools = JSON.parse(localStorage.getItem('schools') || '[]');
  
   
    const updatedSchools = [...storedSchools, newSchoolData];
  
    setNewSchool(updatedSchools);
    
    resetForm();

    localStorage.setItem('schools', JSON.stringify(updatedSchools));
  
    
  
    console.log('New School List:', updatedSchools);
  };
  

  return (
    <Formik initialValues={initialValues}
     validationSchema={schoolSchema} 
     onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
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
                  <Field
                    type='text'
                    id='schoolName'
                    name='schoolName'
                    placeholder='Enter School Name'
                    className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
                  />
                </div>

                {/* First Name */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    First Name<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Enter First Name'
                    className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
                  />
                </div>

                {/* Last Name */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Last Name<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    id='lastName'
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
                  />
                </div>

                {/* Email */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Email<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    type='email'
                    id='email'
                    name='email'
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
                    <Field
                      type='tel'
                      id='phone'
                      name='phone'
                      placeholder='+92 XXX XXXXXXX'
                      className='flex-1 bg-gray-100 border-none focus:ring-0'
                    />
                  </div>
                </div>

                {/* Address */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Address<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    type='text'
                    id='address'
                    name='address'
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
                    <Field
                      as='select'
                      name='country'
                      className='block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900 appearance-none'
                    >
                      <option value=''>Select Country</option>
                      <option value='Pakistan'>Pakistan</option>
                      <option value='India'>India</option>
                      <option value='USA'>USA</option>
                      <option value='UK'>UK</option>
                      <option value='Other'>Other</option>
                    </Field>
                    <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500' />
                  </div>
                </div>

                {/* City */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    City<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    type='text'
                    id='city'
                    name='city'
                    placeholder='Select City'
                    className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-end ml-auto mt-4 px-9'>
              <button
                type='submit'
                className='bg-green-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700'
              >
                Add School
              </button>
            </div>
          </div>
          <Persist name='formik' />
        </Form>
      )}
    </Formik>
  );
};

export default AddSchool;
