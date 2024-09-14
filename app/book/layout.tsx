import React from "react";
import { Separator } from "@/components/ui/separator";
import { StarIcon, StarFilledIcon, BackpackIcon,ThickArrowDownIcon,CrumpledPaperIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function BookLayout({ children }) {
  return (
    <div className="w-screen p-0 m-0 max-h-screen h-screen flex flex-col-reverse  flex-grow">
      <div className="grid grid-flow-row grid-cols-3 bg-white pt-6 px-12 rounded-t-[32px] w-screen md:block md:h-4/12 lg:h-1/5 ">
        <div className="flex flex-col w-fit">
          <span className="text-3xl font-bold">Hotel Helvetics</span>
          <span className="flex flex-row w-full">
            <StarIcon color="red" spacing={2} className="w-6 h-6"></StarIcon>
            <StarIcon color="red" spacing={2} className="w-6 h-6"></StarIcon>
            <StarIcon color="red" spacing={2} className="w-6 h-6"></StarIcon>
            <StarIcon color="red" spacing={2} className="w-6 h-6"></StarIcon>
            <StarIcon color="red" spacing={2} className="w-6 h-6"></StarIcon>
            
          </span>
        </div>
        <div className="flex flex-col gap-4 w-fit grid-cols-subgrid">
          <div className="w-fit flex flex-row">
            <BackpackIcon className="w-6 h-6"></BackpackIcon>
            <span className="text-lg">23, Hdsfad Podsfsa</span>
          </div>
        </div>
      </div>
      <section className="p-8">{children}</section>
    </div>
  );
}

export default BookLayout;
