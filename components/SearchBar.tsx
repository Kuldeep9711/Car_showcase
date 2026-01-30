"use client"

import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
         <Image 
          src="magnifying-glass.svg"
          alt="magnifying-glass"
          width={40}
          height={40}
          className='object-contain'
         />
  </button>
)

interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}


const SearchBar = ( {setManufacturer, setModel}: SearchBarProps ) => {
  const [searchmanufacturer, setSearchManufacturer] = useState<string | null>('');
  const [searchmodel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchmanufacturer === '' && searchmodel === '') {
      return alert("Please fill in the search bar");
    }

    setModel(searchmodel)
    setManufacturer(searchmanufacturer ?? "")
  };

  

 return (

    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          selected={searchmanufacturer}
         setSelected={setSearchManufacturer}
        />
      </div>
      
    
      <div className='searchbar__item'>
         <Image 
         src="/model-icon.png"
         alt="car model"
         width={25}
         height={25}
         className='absolute w-5 h-5 ml-4'
         />

          <input
          type="text"
          name="model"
          value={searchmodel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

           <SearchButton otherClasses="sm:hidden"/>
      </div>
        

    </form>
  );
};


export default SearchBar 
