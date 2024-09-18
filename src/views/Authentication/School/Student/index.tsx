'use client';
import React, { useEffect, useState } from 'react';
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
import { useSearchParams } from 'next/navigation'; // Import this to read query params

interface Student {
  id: number;
  name: string;
  schoolName: string;
  email: string;
  gender: string;
  grade: string;
  program: string;
}

const Student = () => {
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const searchParams = useSearchParams(); // Access the query params

  useEffect(() => {
    const storedStudents = localStorage.getItem('student');
    if (storedStudents) {
      const parsedStudents = JSON.parse(storedStudents);
      setAllStudents(parsedStudents);
      console.log('parsed student', parsedStudents);
    }
  }, []);

  // Get the schoolName from the query parameter
  const schoolName = searchParams.get('schoolName');

  console.log('school Name ', schoolName);

  // Filter students by the schoolName and search term
  const filteredStudents = allStudents.filter(
    student =>
      student.schoolName === schoolName &&
      student.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
                className='hover:text-green-700 font-medium'
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
            placeholder='Search by name'
            className='w-full px-2 bg-gray-100 rounded-lg'
            value={searchTerm} // Controlled input
            onChange={e => setSearchTerm(e.target.value)} // Update search term
            required
          />
        </div>
      </div>

      {/* Student/Teacher Navigation */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 mb-4'>
        <div className='flex space-x-4'>
          <Link
            href='#'
            className='px-5 hover:text-green-700 font-medium  border-b-2 border-green-700'
          >
            Student
          </Link>

          <Link
            href='/school/teacher'
            className='px-5 hover:text-green-700 font-medium'
          >
            Teacher
          </Link>
        </div>

        <div className='mt-4 sm:mt-0 sm:ml-auto'>
          <Link href='/school/student/addStudent'>
            <Button className='bg-green-900 border rounded-lg shadow-md text-slate-200'>
              Add Student
            </Button>
          </Link>
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
            {filteredStudents.map(std => (
              <TableRow key={std.id}>
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

export default Student;
