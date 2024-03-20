import { Transition } from "@headlessui/react";
import React, { useState } from "react";

const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 text-white">
        <span className="text-xl font-bold">Navigation</span>
        <button
          className="text-white focus:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-y-0 left-0 w-64 bg-gray-900 text-white">
          <ul className="py-4">
            <li className="cursor-pointer px-6 py-2 hover:bg-gray-700">
              Item 1
            </li>
            <li className="cursor-pointer px-6 py-2 hover:bg-gray-700">
              Item 2
            </li>
            <li className="cursor-pointer px-6 py-2 hover:bg-gray-700">
              Item 3
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default NavigationDrawer;
