import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
import { ImageDropDownProps, Option } from '../../types/type';



const ImageDropDown: React.FC<ImageDropDownProps> = ({ options, members, todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option[]>([]);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleOption = (option: Option) => {
    setSelected(prev =>
      prev.some(item => item.id === option.id)
        ? prev.filter(item => item.id !== option.id)
        : [...prev, option]
    );
  };

  const removeItem = (remove: Option) => {
    const updatedSelected = selected.filter(item => item.id !== remove.id);
    setSelected(updatedSelected);
  };

  const clearSelected = () => {
    setSelected([]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    members(selected);
  }, [selected]);

  return (
    <div className="w-full font-sans">
      <div className="relative" ref={dropdownRef}>
        {selected.length > 0 && (
          <span className="absolute -top-2 left-4 px-2 bg-indigo-50 text-xs">Add Person</span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full min-h-14 py-2 px-4 flex items-center justify-between text-left border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        >
          <div className="flex flex-wrap text-gray-900">
            {selected.length > 0 ? selected.map(item => (
              <div key={item.id} className="bg-purple-100 rounded-3xl px-2 m-1 w-fit h-7 flex items-center gap-x-2">
                <img src={item.avatar} className="w-5 h-5 rounded-full" alt={item.name} />
                <span className="text-sm">{item.name}</span>
                <IoMdClose
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(item);
                  }}
                />
              </div>
            )) : 'Add Person'}
          </div>
          <FaCaretDown className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
            <div className="p-2 border-b border-gray-200">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 border border-gray-500 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Search values"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <ul className="max-h-60 h-60 mb-2 overflow-auto py-1">
              {filteredOptions.map((option: Option) => (
                <li
                  key={option.id}
                  className={`flex gap-x-3 mb-1 items-center px-3 py-2 cursor-pointer hover:bg-purple-100 ${
                    selected.some(item => item.id === option.id) ? 'bg-purple-50' : ''
                  }`}
                  onClick={() => toggleOption(option)}
                >
                  <div className={`w-5 h-5 border rounded flex items-center justify-center ${
                    selected.some(item => item.id === option.id) ? 'bg-purple-600 border-purple-600' : 'border-gray-300'
                  }`}>
                    {selected.some(item => item.id === option.id) && (
                      <CheckIcon className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <img src={option.avatar} className="w-6 h-6 rounded-full" alt={option.name} />
                  <span>{`${option.name} / ${option.code}`}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center px-3 py-2 border-t border-gray-200">
              <span className="text-xs text-gray-900">Selected: {selected.length}</span>
              <button
                onClick={clearSelected}
                className="text-xs text-blue-600 hover:text-blue-900"
              >
                Clear selected
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageDropDown;
