import React from "react";
import Link from "next/link";
import Contactus from './Contactus';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  sublinks?: { name: string; href: string }[];
}

const navigation: NavigationItem[] = [

  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Service', href: '/service', current: false },
 
  { name: "DOMESTIC [Our Network]", href: '/domestic', current: false },
  { name: "INTERNATIONAL [Our Network]", href:'/International', current: false  },
  { name: 'Pincode locator', href: '/pincodelocator', current: false },
  { name: 'Join Us', href: '/join', current: false },
  { name: 'Pickup Request', href: '/pickuprequest', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="hmBurger">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                  'block  py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            {/* <Contactus /> */}
            <div className="mt-4"></div>
            {/* <button className="bg-white w-full hover:bg-purple hover:text-white text-black border border-purple font-medium py-2 px-4 rounded">
              Sign In
            </button>
            <button className="bg-purple w-full hover:bg-purple hover:text-white text-white font-medium my-2 py-2 px-4 rounded">
              Register
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
