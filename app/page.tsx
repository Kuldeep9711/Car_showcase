
import { Hero, SearchBar, CustomFilters, ShowMore} from "@/components";
import { fetchCars } from "@/app/utils"; 
import { CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";


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

export default async function Home({ searchParams }: HomeProps) {
  // ✅ STEP 1: Await the searchParams promise to get the actual data
  const params = await searchParams;

  // ✅ STEP 2: Use the unwrapped params to fetch cars
  const allCars = await fetchCars({
    manufacturer: params.manufacturer || "",
    year: Number(params.year) || 2022,
    fuel: params.fuel || "",
    limit: Number(params.limit) || 10,
    model: params.model || "",
  });

    // ✅ ADD THE LOG HERE
  console.log("--- API DEBUG START ---");
  console.log("Cars Data:", allCars);
  console.log("Is Array:", Array.isArray(allCars));
  console.log("--- API DEBUG END ---");

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
                pageNumber={(params.limit || 10) / 10}
                isNext={(params.limit || 10) > allCars.length}
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
 