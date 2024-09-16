'use client';
import React, { useState } from 'react';
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

import { ArrowRight, CircleUserRound, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { useRouter, useSearchParams } from 'next/navigation';

const Teacher = () => {
  const [active, setActive] = useState('teacher');
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

  // const [searched, setSearchhed] = useState('');

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

  //   setSearchhed(e.target.value.toLowerCase());
  // }\

  // const router = useRouter();

  // const handleSearch = () => {
  //   const queryParam = useSearchParams();
  //   const searchParam = queryParam.get('q');
  // };

  return (
    <div className='container'>
      {/* Back Button */}
      <div className='flex items-start justify-start font-medium mt-1'>
        <Link href='/school'>
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
      <div className='flex grid-cols-2 items-start gap-4 mt-3'>
        <div className='bg-gray-100 flex items-center w-full rounded-lg'>
          {/* <Search className='text-gray-100 w-5 h-5 ml-2' /> */}
          <input
            type='text'
            name='search'
            placeholder='Search'
            className='px-2 bg-gray-100 w-full rounded-lg'
            value=''
            onChange={e => console.log(e.target.value)}
            required
          />
        </div>

        {/* Approved Input Field */}
        <div className='bg-gray-100 rounded-lg'>
          <input
            type='text'
            name='approved'
            placeholder='APPROVED'
            className='bg-gray-100 px-2 rounded-lg'
            required
          />
        </div>
      </div>

      {/*  */}
      <div className='flex flex-col gap-4 mt-3  border border-gray-100 rounded-lg shadow-md pt-5 pl-7 w-full '>
        {/* student teacher navigation */}
        <div className='flex grid-cols-2 items-start justify-between mb-0'>
          <div className='flex grid-cols-2 gap-3 items-start pl-8 '>
            <Link
              href='/school/student'
              className={`px-5 hover:text-green-700 ${active === 'student' ? ' font-medium border-b-2 border-green-700' : 'text-sm'}`}
              onClick={() => setActive('student')}
            >
              Student
            </Link>

            <Link
              href='#'
              className={`px-5 hover:text-green-700 ${active === 'teacher' ? ' font-medium border-b-4 border-green-700' : 'text-sm'}`}
              onClick={() => setActive('teacher')}
            >
              Teacher
            </Link>
          </div>

          <div className='flex flex-col items-start pr-4'>
            <Button className='bg-green-900 border rounded-lg shadow-md text-slate-200'>
              Add Teacher
            </Button>
          </div>
        </div>

        <Table className='mt-0'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px] '>NAME</TableHead>
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
