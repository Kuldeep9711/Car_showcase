
  
  "use client"

import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
     const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => { 
      e.preventDefault()
     
      if(manufacturer === '') {
         return alert("Please fill in the search bar")
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
   }

   const updateSearchParams = (manufacturer: string, model: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) searchParams.set('model', model);
         else searchParams.delete('model');


        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer);
        } else {
            searchParams.delete('manufacturer');
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathname, { scroll: false }); 
    }

  return (
     <form className='searchbar' onSubmit={handleSearch}>
         <div className='searchbar__item'>
            <SearchManufacturer
             manufacturer={manufacturer}
             setManufacturer={setManufacturer}
            />

                <button type="submit" className="ml-3 z-10"></button>
         </div>
     </form>
  )
}

export default SearchBar 


