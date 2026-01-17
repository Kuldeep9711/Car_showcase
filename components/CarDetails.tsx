"use client"

import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { CarProps } from "@/types";
import { Dialog, Transition, DialogPanel } from "@headlessui/react";


interface CarDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, car}: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={closeModel}>
            <Transition 
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
             <div className="fixed inset-0 bg-black bg-opacity-25" /> 
             </Transition>
             <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition 
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5">
                    <button 
                    type="button" 
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModel}
                    >
                        <Image 
                         src="/close.svg"
                         alt="close"
                         width={20}
                         height={20}
                         className="object-contain"
                        />
                    </button>
                </DialogPanel>
                </Transition>    
                </div>
             </div>
         </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
