import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Service', href: '/service', current: false },
    { name: 'Our Network', href: '/ournetwork', current: false },
    { name: 'Pincode locator', href: '/pincodelocator', current: false },
    { name: 'Join Us', href: '/join', current: false },
    { name: 'Pickup Request', href: '/pickuprequest', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
  
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-lightpink navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                {/* logo for mobile */}
                                <img
                                    className="block h-30px w-[50%] lg:hidden"
                                    src={'/assets/logo/logo.webp'}
                                    alt="Courses-Logo"
                                />
                                 {/* logo for Desktop */}
                                <img
                                    className="hidden h-48px w-[50%]  lg:block"
                                    src={'/assets/logo/logo.webp'}
                                    alt="Courses-Logo"
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-purple' : 'hover:text-purple',
                                                'pl-3 py-4 text-[14px] font-medium space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    {/* <Contactus /> */}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        {/* <Signdialog /> */}


                        {/* REGISTER DIALOG */}

                        {/* <Registerdialog /> */}


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
