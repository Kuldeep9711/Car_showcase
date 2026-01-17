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

  // ✅ Use the student/demo key here
  url.searchParams.append('customer', 'hrjavascript-mastery',);
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  
  // If an angle is provided (like '29' or '33'), add it to the URL
  if (angle) {
    url.searchParams.append('angle', `${angle}`);
  }

  return `${url}`;
}

/*
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new 
  URL("https://cdn.imagin.studio/getimage");
  
  const { make, model, year } = car;
  
  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("modeFamily", model.split(" ")[0]);
   url.searchParams.append("zoomtype", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
     url.searchParams.append("angle", `${angle}`)

     return `${url}`;
} */
