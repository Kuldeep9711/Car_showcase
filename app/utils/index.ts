
// Define the shape of the filters we expect
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, fuel, limit, model } = filters;

  // These credentials come from your RapidAPI screenshot
  const API_KEY = 'n1cMUifZ5ch2OAZTDJSRzklQaTnJR0db91KUqFSr';
  const API_HOST = 'cars-by-api-ninjas.p.rapidapi.com';

  const response = await fetch(
   `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    }
  );

    return await response.json();
  
};

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

