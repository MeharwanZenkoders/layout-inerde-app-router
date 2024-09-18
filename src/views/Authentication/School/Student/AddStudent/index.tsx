'use client';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { ArrowRight, ChevronDown, Flag } from 'lucide-react';
import Link from 'next/link';
import * as Yup from 'yup';
import { Persist } from 'formik-persist';

const studentSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  schoolName: Yup.string().required('School Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|pk)$/,
      'Email must end with .com or .pk',
    )
    .required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  grade: Yup.string().required('Grade is required'),
  program: Yup.string().required('Program is required'),
});

interface Student {
  id: number;
  name: string;
  schoolName: string;
  email: string;
  gender: string;
  grade: string;
  program: string;
}

const generateId = (existing: number[]): number => {
  let newId = existing.length ? Math.max(...existing) + 1 : 1;
  while (existing.includes(newId)) {
    newId += 1;
  }
  return newId;
};

const AddStudentView = () => {
  const [newStudent, setNewStudent] = useState<Student[]>([
    {
      id: 1,
      name: 'John Doe',
      schoolName: 'Lakeview School',
      email: 'john.doe@example.com',
      gender: 'Male',
      grade: 'A',
      program: 'Computer Science',
    },
    {
      id: 2,
      name: 'Jane Smith',
      schoolName: 'Lakeview School',
      email: 'jane.smith@example.com',
      gender: 'Female',
      grade: 'B',
      program: 'Business Administration',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      schoolName: 'Lakeview School',
      email: 'alice.johnson@example.com',
      gender: 'Female',
      grade: 'A',
      program: 'Psychology',
    },
    {
      id: 4,
      name: 'Robert Brown',
      schoolName: 'Lakeview School',
      email: 'robert.brown@example.com',
      gender: 'Male',
      grade: 'C',
      program: 'Mechanical Engineering',
    },
    {
      id: 5,
      name: 'Emily Davis',
      schoolName: 'Lakeview School',
      email: 'emily.davis@example.com',
      gender: 'Female',
      grade: 'B',
      program: 'Marketing',
    },
    {
      id: 6,
      name: 'Michael Wilson',
      schoolName: 'Lakeview School',
      email: 'michael.wilson@example.com',
      gender: 'Male',
      grade: 'A',
      program: 'Data Science',
    },
    {
      id: 7,
      name: 'Sophia Martinez',
      schoolName: 'Lakeview School',
      email: 'sophia.martinez@example.com',
      gender: 'Female',
      grade: 'A',
      program: 'Graphic Design',
    },
  ]);

  const initialValues: Student = {
    id: 0,
    name: '',
    schoolName: '',
    email: '',
    gender: '',
    grade: '',
    program: '',
  };

  const handleSubmit = (
    values: Student,
    { resetForm }: { resetForm: () => void },
  ) => {
    console.log('Form Submitted with values:', values);

    const newStudentData = {
      id: generateId(newStudent.map(std => std.id)),
      name: values.name,
      schoolName: values.schoolName,
      email: values.email,
      gender: values.gender,
      grade: values.grade,
      program: values.program,
    };

    const storedStudent = JSON.parse(localStorage.getItem('students') || '[]');
    const updatedStudent = [...storedStudent, newStudentData];
    setNewStudent(updatedStudent);

    resetForm();

    localStorage.setItem(
      'students',
      JSON.stringify([...newStudent, newStudentData]),
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={studentSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='container'>
            <div>
              <div className='flex items-start justify-start font-medium mt-1'>
                <Link href='/school/student'>
                  <ArrowRight className='rotate-180' />
                </Link>
                <span className='px-2'>Back</span>
              </div>
              <div className='flex items-start justify-items-start mt-5'>
                <h1 className='text-xl font-bold'>Add Student</h1>
              </div>
            </div>

            <div className='flex grid-cols-3 justify-between mt-4'>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full'>
                {/* Name */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Name<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter Name'
                    className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
                  />
                </div>

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

                {/* Gender */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Gender<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    as='select'
                    name='gender'
                    className='block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
                  >
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </Field>
                </div>

                {/* Grade */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Grade<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    type='text'
                    id='grade'
                    name='grade'
                    placeholder='Enter Grade'
                    className='mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md p-2 text-gray-900'
                  />
                </div>

                {/* Program */}
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Program<span className='text-red-500'>*</span>
                  </label>
                  <Field
                    type='text'
                    id='program'
                    name='program'
                    placeholder='Enter Program'
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
                Add Student
              </button>
            </div>
          </div>
          <Persist name='formik' />
        </Form>
      )}
    </Formik>
  );
};

export default AddStudentView;
