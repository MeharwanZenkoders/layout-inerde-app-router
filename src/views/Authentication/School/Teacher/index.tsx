'use client';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { ArrowRight, CircleUserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Teacher = () => {
  const students = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      grade: 'A',
      program: 'Computer Science',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      gender: 'Female',
      grade: 'B',
      program: 'Business Administration',
    },
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      gender: 'Female',
      grade: 'A',
      program: 'Psychology',
    },
    {
      name: 'Robert Brown',
      email: 'robert.brown@example.com',
      gender: 'Male',
      grade: 'C',
      program: 'Mechanical Engineering',
    },
    {
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      gender: 'Female',
      grade: 'B',
      program: 'Marketing',
    },
    {
      name: 'Michael Wilson',
      email: 'michael.wilson@example.com',
      gender: 'Male',
      grade: 'A',
      program: 'Data Science',
    },
    {
      name: 'Sophia Martinez',
      email: 'sophia.martinez@example.com',
      gender: 'Female',
      grade: 'A',
      program: 'Graphic Design',
    },
  ];

  return (
    <div className='container mx-auto px-4'>
      {/* Back Button */}
      <div className='flex items-start justify-start font-medium mt-4'>
        <Link href='#'>
          <ArrowRight className='rotate-180' />
        </Link>
        <span className='px-2'> Back</span>
      </div>

      {/* Breadcrumb to navigate */}
      <div className='mt-6'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href='/school'
                className=' hover:text-green-700 font-medium'
              >
                School
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='font-medium' />
            <BreadcrumbItem>
              <BreadcrumbLink
                href='#'
                className='text-green-700 hover:text-green-700 font-medium'
              >
                Management
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Search Bar */}
      <div className='grid sm:grid-cols-3 grid-rows-2 gap-4 mt-6'>
        <div className='flex items-center sm:col-span-2 bg-gray-100 rounded-lg'>
          <input
            type='text'
            name='search'
            placeholder='Search'
            className='w-full px-2 bg-gray-100 rounded-lg'
            required
          />
        </div>

        {/* Approved Input Field */}
        <div className='bg-gray-100 rounded-lg'>
          <input
            type='text'
            name='approved'
            placeholder='Approved'
            className='bg-gray-100 px-2 rounded-lg w-full'
            required
          />
        </div>
      </div>

      {/* Student/Teacher Navigation */}

      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 mb-4'>
        <div className='flex space-x-4'>
          <Link
            href='/school/student'
            className='px-5 hover:text-green-700 font-medium'
          >
            Student
          </Link>

          <Link
            href='#'
            className='px-5 hover:text-green-700 font-medium border-b-2 border-green-700'
          >
            Teacher
          </Link>
        </div>

        <div className='mt-4 sm:mt-0 sm:ml-auto'>
          <Button className='bg-green-900 border rounded-lg shadow-md text-slate-200'>
            Add Teacher
          </Button>
        </div>
      </div>

      {/* Students Table */}
      <div className='w-full border border-gray-100 rounded-lg shadow-md p-5'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>GENDER</TableHead>
              <TableHead>GRADE</TableHead>
              <TableHead>PROGRAM</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map(std => (
              <TableRow key={std.name}>
                <TableCell>
                  <div className='flex items-center space-x-2'>
                    <CircleUserRound
                      height={20}
                      width={20}
                      className='rounded-full'
                    />
                    <span className='px-4'>{std.name}</span>
                  </div>
                </TableCell>
                <TableCell>{std.email}</TableCell>
                <TableCell>{std.gender}</TableCell>
                <TableCell>{std.grade}</TableCell>
                <TableCell>{std.program}</TableCell>
                <TableCell>
                  <Link href='/school/profile'>
                    <ArrowRight />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Teacher;

// const [searched, setSearchhed] = useState('');

// const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

//   setSearchhed(e.target.value.toLowerCase());
// }\

// const router = useRouter();

// const handleSearch = () => {
//   const queryParam = useSearchParams();
//   const searchParam = queryParam.get('q');
// };

// import { useRouter, useSearchParams } from 'next/navigation';
