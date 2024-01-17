import React, { useState } from "react";
import { COUNTRIES } from "../../static/countries";

export default function DropDown(props: {
  text: string;
  selectedValue: string;
  setSelectedValue: any;
}) {
  const { text, selectedValue, setSelectedValue } = props;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-textInput text-sm">{text}</span>
      <div className="relative">
        <div className="relative inline-block w-full">
          <div
            onClick={toggleDropdown}
            className=" cursor-pointer text-placeholer border-input border p-2 px-4 text-sm rounded-lg"
          >
            {selectedValue}
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L16 7z" />
            </svg>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute h-36 overflow-y-scroll mt-1 w-full rounded-md bg-white shadow-lg">
            {COUNTRIES.map((item: any) => (
              <div
                key={item.code}
                className="py-1 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedValue(item.name);
                  setDropdownOpen(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
