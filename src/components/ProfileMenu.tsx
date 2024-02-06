"use client";

import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="mr-2 border-solid border-4 border-purple-600 rounded-full focus:outline-none focus:border-indigo-500"
        onClick={togglePopover}
      >
        <CgProfile size={"2.2rem"} color={"white"} />
      </button>
      {isOpen && (
        <div className="bg-white rounded-md shadow-lg">
          <div className="flex flex-col gap-2 m-2 p-2">
            <button className="hover:bg-gray-300 focus:outline-none focus:bg-gray-100">
              Account
            </button>
            <button className="hover:bg-gray-300 focus:outline-none focus:bg-gray-100">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
