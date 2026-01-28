"use client"

import { Hero, SearchBar, CustomFilters, ShowMore} from "@/components";
import { fetchCars } from "@/app/utils"; 
import { CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { use, useEffect, useState } from "react";


// Define the type for the props, ensuring searchParams is a Promise
interface HomeProps {
  searchParams: Promise<{
    manufacturer?: string;
    year?: string;
    fuel?: string;
    limit?: string;
    model?: string;
  }>;
}

export default  function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // search status
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("");

  // filter states
  const[fuel, setFuel] = useState("");
  const [year, setYear] = useState(202);
 
 //pagination states
 const[limit, setLimit] = useState(10);

 const getCars = async () => {
  setLoading(true)
  
    try {
       const result = await fetchCars({
    manufacturer: manufacturer || '',
    year: year || 2022,
    fuel: fuel || '',
    limit: limit || 10,
    model: model || '',
  })

  setAllCars(result);
    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
  }

 useEffect(() => {
    getCars();
 }, [fuel, year, limit, manufacturer, model])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilters title="fuel" options={fuels} />
            <CustomFilters title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={`car-${index}`} car={car} />
              ))}
            </div>

             <ShowMore 
                pageNumber={Number(params.limit || 10) / 10}
                isNext={Number(params.limit || 10) > allCars.length}
               />

          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
 