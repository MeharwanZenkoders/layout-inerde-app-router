'use client';
import React, { useState } from 'react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  LogIn,
  School,
  CircleUserRound,
  GraduationCap,
  Hourglass,
  BookOpenCheck,
  ChevronLeft,
  Menu,
} from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';

const MobileSidebar = () => {
  const [collapse, setCollapse] = useState(false);
  const [active, setActive] = useState('');
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className='bg-white h-screen'>
        <aside className='w-screen flex h-screen flex-col overflow-y-auto border-r bg-white px-5 py-3'>
          <Link href='/'>
            <Image
              src={logo}
              alt='Logo'
              height={86}
              width={80}
            />
          </Link>

          <hr className='bg-gray-800 mt-3' />

          <div className='mt-3 flex flex-1 flex-col justify-between'>
            <nav className='-mx-3 space-y-6 '>
              <div className='space-y-3 '>
                <Link href='#'>
                  <div className=' text-gray-600 hover:bg-gray-100 hover:text-green-700 flex transform items-center rounded-lg px-3 py-2'>
                    <School
                      className='h-5 w-5'
                      aria-hidden='true'
                    />

                    <span className='mx-2 text-sm font-medium'>
                      School Management
                    </span>
                  </div>
                </Link>

                <Link href='#'>
                  <div className=' text-gray-600 hover:bg-gray-100 hover:text-green-700 flex transform items-center rounded-lg px-3 py-2'>
                    <CircleUserRound
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                    <span className='mx-2 text-sm font-medium'>
                      Sub-Admin Management
                    </span>
                  </div>
                </Link>

                <Link href='#'>
                  <div className=' text-gray-600 hover:bg-gray-100 hover:text-green-700 flex transform items-center rounded-lg px-3 py-2'>
                    <GraduationCap
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                    <span className='mx-2 text-sm font-medium'>
                      Teacher Management
                    </span>
                  </div>
                </Link>

                <Link href='#'>
                  <div className=' text-gray-600 hover:bg-gray-100 hover:text-green-700 flex transform items-center rounded-lg px-3 py-2'>
                    <Hourglass
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                    <span className='mx-2 text-sm font-medium'>Waitlist</span>
                  </div>
                </Link>

                <Link href='#'>
                  <Accordion
                    className='mx-2 text-sm font-medium'
                    type='single'
                    collapsible
                  >
                    <AccordionItem value='item-1'>
                      <div className=' text-gray-600 hover:bg-gray-100 hover:text-green-700 flex transform items-center rounded-lg px-3 py-2'>
                        <BookOpenCheck
                          className='h-5 w-5'
                          aria-hidden='true'
                        />

                        <AccordionTrigger className='px-2'>
                          Course Creation
                        </AccordionTrigger>
                      </div>
                      <AccordionContent className='flex transform items-center rounded-lg px-10 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-700'>
                        OOP
                      </AccordionContent>

                      <AccordionContent className='flex transform items-center rounded-lg px-10 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-700'>
                        Data Structures
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Link>
              </div>
            </nav>

            <div className='mt-6'>
              <div className='mt-6 flex items-center justify-between  '>
                <div
                  className={`${collapse ? 'hidden' : 'flex items-start gap-x-2 text-sm font-medium text-gray-700 rounded-lg  transition-colors duration-300 hover:bg-gray-100 hover:text-green-700'}`}
                >
                  Log Out
                </div>

                <Link href='#'>
                  <LogIn className='rotate-180 h-5 w-5 text-gray-800  rounded-lg  transition-colors duration-300 hover:text-green-700' />
                </Link>
              </div>
            </div>
          </div>
        </aside>
        {/* <div className='mt-3 flex flex-1 flex-col justify-between'>
        <nav className='-mx-3 space-y-6 '>
          <div className='space-y-3 '>
            <Link href='#'>
              <div
                className={`${
                  active === 'school'
                    ? 'bg-gray-100 text-green-700 '
                    : ' text-gray-600 hover:bg-gray-100 hover:text-green-700'
                } flex transform items-center rounded-lg px-3 py-2`}
                onClick={() => setActive('school')}
              >
                <School
                  className='h-5 w-5'
                  aria-hidden='true'
                />

                <span
                  className={`${collapse ? 'hidden' : 'mx-2 text-sm font-medium'}`}
                >
                  School Management
                </span>
              </div>
            </Link>

            <Link href='#'>
              <div
                className={`${
                  active === 'admin'
                    ? 'bg-gray-100 text-green-700 '
                    : ' text-gray-600 hover:bg-gray-100 hover:text-green-700'
                } flex transform items-center rounded-lg px-3 py-2`}
                onClick={() => setActive('admin')}
              >
                <CircleUserRound
                  className='h-5 w-5'
                  aria-hidden='true'
                />
                <span
                  className={`${collapse ? 'hidden' : 'mx-2 text-sm font-medium'}`}
                >
                  Sub-Admin Management
                </span>
              </div>
            </Link>

            <Link href='#'>
              <div
                className={`${
                  active === 'teacher'
                    ? 'bg-gray-100 text-green-700 '
                    : ' text-gray-600 hover:bg-gray-100 hover:text-green-700'
                } flex transform items-center rounded-lg px-3 py-2`}
                onClick={() => setActive('teacher')}
              >
                <GraduationCap
                  className='h-5 w-5'
                  aria-hidden='true'
                />
                <span
                  className={`${collapse ? 'hidden' : 'mx-2 text-sm font-medium'}`}
                >
                  Teacher Management
                </span>
              </div>
            </Link>

            <Link href='#'>
              <div
                className={`${
                  active === 'waitlist'
                    ? 'bg-gray-100 text-green-700 '
                    : ' text-gray-600 hover:bg-gray-100 hover:text-green-700'
                } flex transform items-center rounded-lg px-3 py-2`}
                onClick={() => setActive('waitlist')}
              >
                <Hourglass
                  className='h-5 w-5'
                  aria-hidden='true'
                />
                <span
                  className={`${collapse ? 'hidden' : 'mx-2 text-sm font-medium'}`}
                >
                  Waitlist
                </span>
              </div>
            </Link>

            <Link href='#'>
              <Accordion
                className={`${collapse ? 'hidden' : 'mx-2 text-sm font-medium'}`}
                type='single'
                collapsible
              >
                <AccordionItem value='item-1'>
                  <div
                    className={`${
                      active === 'course'
                        ? 'bg-gray-100 text-green-700 '
                        : ' text-gray-600 hover:bg-gray-100 hover:text-green-700'
                    } flex transform items-center rounded-lg px-2 py-2`}
                    onClick={() => setActive('course')}
                  >
                    <BookOpenCheck
                      className='h-5 w-5'
                      aria-hidden='true'
                    />

                    <AccordionTrigger className='px-2'>Course Creation</AccordionTrigger>
                  </div>
                    <AccordionContent className='flex transform items-center rounded-lg px-10 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-700'>
                      OOP
                      </AccordionContent>

                    <AccordionContent className='flex transform items-center rounded-lg px-10 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-700'>
                      Data Structures
                      </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Link>
          </div>
        </nav>

        <div className='mt-6'>
          <div className='mt-6 flex items-center justify-between  '>
            <div
              className={`${collapse ? 'hidden' : 'flex items-start gap-x-2 text-sm font-medium text-gray-700 rounded-lg  transition-colors duration-300 hover:bg-gray-100 hover:text-green-700'}`}
            >
              Log Out
            </div>

            <Link href='#'>
              <LogIn className='rotate-180 h-5 w-5 text-gray-800  rounded-lg  transition-colors duration-300 hover:text-green-700' />
            </Link>
          </div>
        </div>
      </div> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
