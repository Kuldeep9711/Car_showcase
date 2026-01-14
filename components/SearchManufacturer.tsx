"use client"

import { useState, Fragment } from "react"
import Image from "next/image"
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react"

import { manufacturers } from "@/constants"
import { SearchManufacturerProps } from "@/types"
import { fetchCars } from "@/app/utils"

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("")

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )

          // ✅ PUT IT HERE
 console.log("query:", query)
  console.log("filteredManufacturers:", filteredManufacturers)

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer as (value: string | null) => void}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-3.5">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions
           /*   className="
                absolute top-full left-0 z-50 mt-1 max-h-60 w-full
                overflow-auto rounded-md bg-white py-1
                text-base shadow-lg ring-1 ring-black ring-opacity-5
                focus:outline-none sm:text-sm
              " */
            > 
              {filteredManufacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className="
                    relative cursor-pointer select-none py-2 pl-10 pr-4
                    text-gray-900
                    data-focus:bg-blue-600
                    data-focus:text-white
                  "
                >
                  <span className="block truncate data-selected:font-medium">
                    {item}
                  </span>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer


