"use client"

import { SearchManufacturerProps } from '@/types'

import { Combobox, ComboboxButton, Transition } from '@headlessui/react'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  return (
     <div className='search-manufacturer'>
       <Combobox>
        <div className='relative w-full'>
            <ComboboxButton className="absolute top-3.5">
              
              </ComboboxButton>  
        </div>
       </Combobox>
     </div>
  )
}

export default SearchManufacturer
