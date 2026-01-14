

import { useState } from "react"
import Image from "next/image"

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";

interface CarCardprops {
    car: CarCardprops;
}

const CarCard = ({ car}: CarCardprops) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div>
      
    </div>
  )
}

export default CarCard
