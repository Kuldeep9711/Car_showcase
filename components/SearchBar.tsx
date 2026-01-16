   "use client"

import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
     const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => { 
      e.preventDefault()
     
      if(manufacturer === '') {
         return alert("Please fill in the search bar")
      }

      updateSearchParams(manufacturer.toLocaleLowerCase())
   }

   const updateSearchParams = (manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        } else {
            searchParams.delete('manufacturer');
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathname, { scroll: false }); // ✅ This updates the page
    }

  return (
     <form className='searchbar' onSubmit={handleSearch}>
         <div className='searchbar__item'>
            <SearchManufacturer
             manufacturer={manufacturer}
             setManufacturer={setManufacturer}
            />
            {/* ✅ Add a search button so you can trigger handleSearch */}
                <button type="submit" className="ml-3 z-10">Search</button>
         </div>
     </form>
  )
}

export default SearchBar


