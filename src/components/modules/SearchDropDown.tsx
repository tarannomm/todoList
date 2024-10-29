import React, { useState } from 'react'
import { ChevronDownIcon, CheckIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FaCaretDown } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';
type Option = {
  id: number
  name: string
}

export default function EmpDropDown({type,options}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<Option[]>([])
  const [search, setSearch] = useState('')

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(search.toLowerCase())
  )

  const toggleOption = (option: Option) => {
    setSelected(prev =>
      prev.some(item => item.id === option.id)
        ? prev.filter(item => item.id !== option.id)
        : [...prev, option]
    )
  }

  const clearSelected = () => {
    setSelected([])
  }

  return (
    <div className={`w-full font-sans ${type=="dashboard" && "ml-3"}`}>
      <div className="relative">
        {type=="dashboard" &&
         <span className='absolute -top-2 left-4 px-2 bg-indigo-50 text-xs'>Employees envolved</span>
        }
       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full py-2 px-4 text-left ${type==="dashboard"? "bg-indigo-50":""} border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500`}
        >
          {type==="dashboard"?
          <span className="block  text-gray-900">
            {selected.length > 0 ? `Selected: ${selected.length}` : 'Select'}
          </span>
          :
          <div className="flex text-gray-900">
          {selected.length > 0 ?
          selected.map(item=>
          <div className='bg-purple-300 rounded-3xl px-2 m-1 w-fit !h-7 flex justify-between items-center'><span className='w-fit '>{item.name}</span><IoMdClose /></div>
          )
            : 'Add Person'}
          </div>
          }
          
          <span className="absolute  inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <FaCaretDown className="w-4 h-4 !text-gray-400 mx-2" aria-hidden="true" />
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1  bg-white rounded-md shadow-lg">
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

            <ul className="max-h-60 overflow-auto py-1">
              {filteredOptions.map((option) => (
                <li
                  key={option.id}
                  className="flex items-center px-3 py-2 cursor-pointer hover:bg-purple-100"
                  onClick={() => toggleOption(option)}
                >
                  <div className={`w-5 h-5 border rounded mr-3 flex items-center justify-center ${
                    selected.some(item => item.id === option.id) ? 'bg-purple-600 border-purple-600' : 'border-gray-300'
                  }`}>
                    {selected.some(item => item.id === option.id) && (
                      <CheckIcon className="w-10 h-10 !text-white" />
                    )}
                  </div>
                  {option.name}
                </li>
              ))}
            </ul>
            {type==="dashboard" &&  
            <button
              onClick={() => setIsOpen(false)}
              className="w-[95%] px-4 py-2  m-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Apply
            </button>
            }
          
            <div className="flex justify-between items-center px-3 py-2 bg-gray-50 border-t border-gray-200">
            
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
  )
}