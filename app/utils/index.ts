// utils/index.ts

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
  const API_KEY = 'aff4f89885mshad78398907c94fep1f90f6jsnd9ecae1dd9c2';
  const API_HOST = 'demo-project120039.p.rapidapi.com';

  const response = await fetch(
    `https://${API_HOST}/catalog/products?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    }
  );

  const result = await response.json();
  return result;
};


/*
const API_KEY =  'aff4f89885mshad78398907c94fep1f90f6jsnd9ecae1dd9c2' 
const API_HOST = 'demo-project120039.p.rapidapi.com';

export const fetchCars = async () => {
  const response = await fetch(`https://${API_HOST}/catalog/products`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    },
  });

  const result = await response.json();
  return result;
}; */