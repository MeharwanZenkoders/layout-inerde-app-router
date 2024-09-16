import { Button } from '@/components/ui/button';
import { SchoolCard } from '@/components/ui/schoolCard';

import Link from 'next/link';
import React from 'react';

const SchoolView = () => {
  return (
    <div className='container'>
      <div className='flex grid-cols-2 justify-between mt-3'>
        <div className='flex items-start justify-start font-medium'>
          <h1 className='text-3xl font-medium'>School Management</h1>
        </div>

        <div className='flex justify-end '>
          <Button className='bg-green-900 shadow-md rounded-lg'>
            <Link
              href='/school/addSchool'
              className='text-slate-100'
            >
              {' '}
              Add School
            </Link>
          </Button>
        </div>
      </div>

      <div className='bg-white mt-8'>
        <SchoolCard />
      </div>
    </div>
  );
};

export default SchoolView;
