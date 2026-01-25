"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/app/utils";


const ShowMore = ({ pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

   const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit",)
   }



  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton 
          title="show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
          />
      )}
    </div>
  )
}

export default ShowMore
