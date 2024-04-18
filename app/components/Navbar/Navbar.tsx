import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  dropdown?: boolean; // Indicates if it's a dropdown item
  sublinks?: { name: string; href: string }[]; // Sublinks for dropdown
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigation: NavigationItem[] = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Service", href: "/service", current: false },
    {
      name: "Our Network",
      href: "#",
      current: false,
      dropdown: true, // Indicates it's a dropdown item
      sublinks: [
        { name: "DOMESTIC", href: "/domestic" },
        { name: "INTERNATIONAL", href: "/International" },
      ],
    },
    { name: "Pincode locator", href: "/pincodelocator", current: false },
    { name: "Join Us", href: "/join", current: false },
    { name: "Pickup Request", href: "/pickuprequest", current: false },
    { name: "Contact Us", href: "/contact", current: false },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    console.log("enter");
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    console.log("leave");

    setIsDropdownOpen(false);
  };
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="bg-lightpink navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch ">
              {/* LOGO */}

              <div className=" overflowOnM flex flex-shrink-0 items-center ">
                {/* logo for mobile */}
                <img
                  className="block h-30px w-[50%] lg:hidden"
                  src={"/assets/logo/logo.webp"}
                  alt="Courses-Logo"
                />
                {/* logo for Desktop */}
                <img
                  className="hidden h-48px w-[50%]  lg:block"
                  src={"/assets/logo/logo.webp"}
                  alt="Courses-Logo"
                />
              </div>

              {/* LINKS */}

              <div className="hiddenN sm:ml-14 ">
                <div className="flex space-x-4 relative">
                  {navigation.map((item) => (
                    <Fragment key={item.name}>
                      {!item.dropdown ? (
                        <Link
                          href={item.href}
                          className={`${
                            item.current ? "text-purple" : "hover:text-purple"
                          } pl-3 py-4 text-[14px] font-medium space-links`}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <>
                          <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`${
                              item.current ? "text-purple" : "hover:text-purple"
                            } pl-3 py-4 text-[14px] font-medium space-links relative`}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                            {isDropdownOpen && item.name === "Our Network" && (
                              <div className="absolute  left-0 bg-white shadow-md rounded-md sublink">
                                {item.sublinks?.map((sublink) => (
                                  <Link
                                    style={{}}
                                    key={sublink.name}
                                    href={sublink.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </Fragment>
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

            <div className="hmBurger md:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
