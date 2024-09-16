// pages/profile.tsx
import { FC } from 'react';
import { ChevronLeft, User, Info, DollarSign, CheckCircle } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const Profile: FC = () => {
  return (
    <div className='container'>
      {/* Header */}
      <div className='flex items-center mt-2 mb-2'>
        <ChevronLeft className='h-6 w-6' />
        <span className='text-gray-700'>Back</span>
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
                href='/school/student'
                className=' hover:text-green-700 font-medium'
              >
                Management
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='font-medium' />
            <BreadcrumbItem>
              <BreadcrumbLink
                href='#'
                className='text-green-700 hover:text-green-700 font-medium'
              >
                Profile
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Profile Details */}
      <div className='max-w-6xl mx-auto mt-2 bg-white shadow-md rounded-lg p-6 md:p-8'>
        {/* User Info */}
        <div className='flex items-center space-x-4'>
          <img
            className='h-20 w-20 rounded-full object-cover'
            src='/profile-picture.jpg'
            alt='Profile'
          />
          <div>
            <h1 className='text-2xl font-semibold text-green-700'>
              Ahmad Raza
            </h1>
            <p className='text-gray-900'>ahmad@gmail.com</p>
          </div>
        </div>

        <hr className='text-gray-100 font-medium' />

        {/* Profile Sections */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
          {/* Basic Details */}
          <div className=' p-4 border border-gray-100 rounded-lg shadow-md'>
            <div className='flex items-center space-x-2 mb-4'>
              <User className='h-6 w-6 text-green-600' />
              <h2 className='text-lg font-semibold text-gray-700'>
                Basic Details
              </h2>
            </div>
            <hr className='text-gray-100 font-medium' />
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <div className='text-gray-900 '>Full Name</div>
                <div className='text-gray-500 '>Ahmad Raza</div>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-between'>
                <div className='text-gray-900'>Email</div>
                <div className='text-gray-500 '>ahmad@gmail.com</div>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-between'>
                <div className='text-gray-900 '>Gender</div>
                <div className='text-gray-500 '>Male</div>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-between'>
                <div className='text-gray-900'>Country</div>
                <div className='text-gray-500'>Ghana</div>
              </div>
              <hr className='text-gray-50 font-medium' />
              <div className='flex justify-between'>
                <div className='text-gray-900 '>Birthday</div>
                <div className='text-gray-500 '>19/03/2018</div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className='p-4 border border-gray-100 rounded-lg shadow-md'>
            <div className='flex items-center space-x-2 mb-4'>
              <Info className='h-6 w-6 text-green-600' />
              <h2 className='text-lg font-semibold text-gray-700'>About</h2>
            </div>
            <hr className='text-gray-100 font-medium' />
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <div className='text-gray-900'>Interest</div>
                <div className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs'>
                  Robotics
                </div>
                <div className='bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs'>
                  Coding
                </div>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-between'>
                <div className='text-gray-900'>Technology Proficiency</div>
                <div className='text-gray-500'>Moderate</div>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-start'>
                <span className='text-gray-900 w-full'>Education Goals</span>
                <p className='text-gray-500 px-4'>
                  Becoming a software engineer requires dedication, continual
                  learning, and a passion for problem-solving. With a solid
                  foundation in programming languages and algorithms, coupled
                  with hands-on experience.
                </p>
              </div>
            </div>
          </div>

          {/* Grade Details */}
          <div className='p-4 border border-gray-100 rounded-lg shadow-md'>
            <div className='flex items-center space-x-2 mb-4'>
              <CheckCircle className='h-6 w-6 text-green-600' />
              <h2 className='text-lg font-semibold text-gray-700'>Grade</h2>
            </div>
            <hr className='text-gray-100 font-medium' />
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span className='text-gray-900'>Grade</span>
                <span className='text-gray-500'>2nd Grade</span>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-between'>
                <span className='text-gray-900'>Program</span>
                <span className='text-gray-500'>Foundation in Maths</span>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className='p-4 border border-gray-100 rounded-lg shadow-md'>
            <div className='flex items-center space-x-2 mb-4'>
              <DollarSign className='h-6 w-6 text-green-600' />
              <h2 className='text-lg font-semibold text-gray-700'>
                Payment Details
              </h2>
            </div>
            <hr className='text-gray-100 font-medium' />
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span className='text-gray-900'>Payment Preference</span>
                <span className='text-gray-500'>Paypal</span>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-between'>
                <span className='text-gray-900'>Account Holder</span>
                <span className='text-gray-500'>Ahmad Raza</span>
              </div>
              <hr className='text-gray-100 font-medium' />
              <div className='flex justify-between'>
                <span className='text-gray-900'>Account Number</span>
                <span className='text-gray-500'>1234 1234 1234 1234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
