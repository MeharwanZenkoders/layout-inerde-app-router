'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';

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


export const SchoolCard = () => {
  const [allSchools, setAllSchools] = useState<Schools[]>([]);

  
  useEffect(() => {
    const storedSchools = localStorage.getItem('schools');
    if (storedSchools) {
  
      const parsedSchools = JSON.parse(storedSchools);
      setAllSchools(parsedSchools);
    }
  }, []);


  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {allSchools.map((school, index) => (
        <Card key={index}>
          <Link href={`/school/student?schoolName=${school.schoolName}`}>
            <CardContent>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center py-6'>
                  <div className='bg-gray-300 border border-gray-300 rounded-lg py-1 px-1'>
                    <Building height={40} width={40} className='text-green-800' />
                  </div>
                </div>
                <div className='flex flex-col justify-center py-5'>
                  <div className='text-lg font-semibold'>{school.schoolName}</div>
                  <div className='flex items-center text-sm'>
                    <Users className='text-green-800' height={15} width={15} />
                    <span className='px-1'>10 Students</span>
                  </div>
                  <div className='flex items-center text-sm'>
                    <GraduationCap className='text-green-800' height={15} width={15} />
                    <span className='px-1'>4  Teachers</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

// // Predefined schools list
// const schools = [
//   {
//     schoolName: 'Greenwood High',
//     students: 450,
//     teachers: 35,
//   },
//   {
//     schoolName: 'Riverdale Academy',
//     students: 320,
//     teachers: 28,
//   },
//   {
//     schoolName: 'Sunnydale School',
//     students: 550,
//     teachers: 40,
//   },
//   {
//     schoolName: 'Hillcrest Institute',
//     students: 380,
//     teachers: 30,
//   },
//   {
//     schoolName: 'Lakeview School',
//     students: 290,
//     teachers: 25,
//   },
//   {
//     schoolName: 'Springfield School',
//     students: 410,
//     teachers: 32,
//   },
// ];