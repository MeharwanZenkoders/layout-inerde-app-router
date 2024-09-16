import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';

const schools = [
  {
    schoolName: 'Greenwood High',
    students: 450,
    teachers: 35,
  },
  {
    schoolName: 'Riverdale Academy',
    students: 320,
    teachers: 28,
  },
  {
    schoolName: 'Sunnydale School',
    students: 550,
    teachers: 40,
  },
  {
    schoolName: 'Hillcrest Institute',
    students: 380,
    teachers: 30,
  },
  {
    schoolName: 'Lakeview School',
    students: 290,
    teachers: 25,
  },
  {
    schoolName: 'Springfield School',
    students: 410,
    teachers: 32,
  },
  {
    schoolName: 'Westwood High',
    students: 480,
    teachers: 38,
  },
  {
    schoolName: 'Oakridge Academy',
    students: 370,
    teachers: 29,
  },
  {
    schoolName: 'Elmwood School',
    students: 430,
    teachers: 33,
  },
  {
    schoolName: 'Riverbank Institute',
    students: 310,
    teachers: 27,
  },
  {
    schoolName: 'Meadowbrook School',
    students: 500,
    teachers: 42,
  },
  {
    schoolName: 'Cedarwood Academy',
    students: 340,
    teachers: 31,
  },
];

export default schools;

export const SchoolCard = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {schools.map((school, index) => (
        <Card key={index}>
          <Link href='/school/student'>
            <CardContent>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center py-6'>
                  <div className='bg-gray-300 border border-gray-300 rounded-lg py-1 px-1'>
                    <Building
                      height={40}
                      width={40}
                      className='text-green-800'
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-center py-5'>
                  <div className='text-lg font-semibold'>
                    {school.schoolName}
                  </div>
                  <div className='flex items-center text-sm'>
                    <Users
                      className='text-green-800'
                      height={15}
                      width={15}
                    />
                    <span className='px-1'>{school.students} Students</span>
                  </div>
                  <div className='flex items-center text-sm'>
                    <GraduationCap
                      className='text-green-800'
                      height={15}
                      width={15}
                    />
                    <span className='px-1'>{school.teachers} Teachers</span>
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
