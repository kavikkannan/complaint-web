"use client";
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
const products = [
  { name: 'profile', description: 'Get a better understanding of your traffic',href: '/profile', icon: ChartPieIcon },
  { name: 'about', description: 'Wanna know about us?', href: '#', icon: CursorArrowRaysIcon },
 ];
const callsToAction = [
  { name: 'Contact manager', href: '#', icon: PhoneIcon },
];
import Link from 'next/link';
import Image from 'next/image';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router=useRouter()
  const navi = async (a) => {
    router.push(a)
  }
  return (
    <header className="bg-black">
      <nav className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="  relative flex lg:flex">
          <Link href="/home_employe" className="-m-1.5 p-1.5">
            <span className="text-black sr-only">Your Company</span>
            <Image className=" h-8 w-auto"
                src=""
                alt="your company"
            />
          </Link>
        </div>
        <div className=" flex lg:hidden">
          <button
          
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="   hidden lg:flex lg:flex-1 gap-x-12 -b-1.5 px-28">
        <Link href="/create_E" className=" relative right-4 text-sm font-semibold leading-6 text-green-200">
           create
          </Link>
          
          <Popover className="absolute right-16">
            <Popover.Button className=" flex items-center gap-x-1 text-sm font-semibold leading-6 text-green-200">
              User
              <ChevronDownIcon className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-1 top-10  z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5 flex ">
                <div className="bg-green-200  p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-black"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-green-300" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href="/profile" className="block font-semibold text-green-900 hover:text-green-300">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600 hover:text-green-200">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
      
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/" className="bg-black flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-green-200 hover:bg-green-400">
            Log out 
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          
        </Popover.Group>
        
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/home_employe" className="-m-1.5 p-1.5">
              <span className="text-black sr-only">Your Company</span>
              <Image
                className=" h-8 w-auto"
                src=""
                alt="your company"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        User
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            onClick={() => navi(item.href)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/create_E"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  create
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features1
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
