import { CarProps } from "@/types";

 export interface FilterProps {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}


export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, fuel, model } = filters;

  // ✅ Use the key from your latest screenshot
  const API_KEY = 'n1cMUifZ5ch2OAZTDJSRzklQaTnJR0db91KUqFSr'; 

  const response = await fetch(
    `https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY, // ✅ Use the direct header name
      },
    }
  );

  const result = await response.json();
  return result;
};


export const calculateCarRent = (city_mpg: any, year: number) => {
  const basePricePerDay = 50; 

  const mileageFactor = 0.1; 
  const ageFactor = 0.05; // Fixed typo from 'agefactor'

   const mpgValue = typeof city_mpg === 'number' ? city_mpg : parseInt(city_mpg) || 20;

  // Calculate additional rate based on mileage and age
  const mileageRate = mpgValue * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  
  // ✅ Force lowercase and trim any accidental spaces
  url.searchParams.append('make', make.toLowerCase().trim());
  
  // ✅ Extract only the first word and lowercase it
  // This turns "Corolla LE" into "corolla"
  const modelFamily = model.split(" ")[0].toLowerCase().trim();
  url.searchParams.append('modelFamily', modelFamily);
  
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);

  if (angle) {
    url.searchParams.append('angle', `${angle}`);
  }

  return url.toString();
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  
  searchParams.set(type, value)
  
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}

