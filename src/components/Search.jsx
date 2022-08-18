import { SearchIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";


export const Search = () => {
  return <div className={`relative w-full`}>
    <div className={`flex justify-between items-center bg-white border border-black rounded-full p-2 w-full`}>
      <SearchIcon className="h-8 w-8 ml-4" />
      <input type="text" placeholder="Chercher un podcats" className="focus:outline-none w-full placeholder:text-gray-300 mx-4 text-lg p-2" />
      <div className="flex items-center bg-gris2 rounded-full p-2 border border-black px-4">
        <span className="text-gray-700 sm:text-lg">Catégorie</span>
        <ChevronDownIcon className="h-8 w-8 text-gray-700" />
      </div>
    </div>
    <div className={`flex justify-between items-center border border-black rounded-full p-2 -z-10 absolute w-full top-1 right-1`}>
      <SearchIcon className="h-8 w-8 ml-4 invisible" />
      <input type="text" placeholder="Chercher un podcats" className="focus:outline-none w-full placeholder:text-gray-300 mx-4 text-lg p-2 invisible" />
      <div className="flex items-center bg-gris2 rounded-full p-2 border border-black invisible">
        <span className="text-gray-700">Catégorie</span>
        <ChevronDownIcon className="h-8 w-8 text-gray-700" />
      </div>
    </div>
  </div>;
};