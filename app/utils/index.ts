
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


/*
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars

  const mileageFactor = 0.1; // Additional rate per mile driven

  const agefactor = 0.05; // Additional rate per yea of vehicle age

  // Calculate additonal rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * agefactor;

  //Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}
*/
