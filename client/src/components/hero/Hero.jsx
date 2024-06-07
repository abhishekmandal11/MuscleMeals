import React from "react";
import { FaDumbbell } from "react-icons/fa";

import { Button } from "..";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="basis-1/2 bg-hero bg-no-repeat bg-cover bg-center flex flex-col pt-40 h-[92vh]">
      <div className="flex flex-col items-center justify-center gap-4 text-white">
        <span className="text-white text-sm px-4 py-1 rounded-lg border-4 border-primary max-w-max">
        "Uniting Strength Through Meals."
        </span>
        <h2 className="font-bold text-3xl md:text-5xl text-white text-center">
          Welcome to <span className="text-primary">Muscle</span>Meals
        </h2>
        <p className="text-center md:text-lg">
          Where fitness enthusiasts come together to discover nutritious and
          delicious recipes tailored for muscle growth and overall well-being. <br />
          Explore, share, and elevate your fitness journey with MuscleMeals.
        </p>
        <Link to={"/recipe"}>
          <Button
            content={"Explore Recipes"}
            customCss={
              "mt-4 md:mt-8 md:py-3 md:px-9 md:text-lg max-w-max rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            }
            icon={<FaDumbbell />}
          />
        </Link>
      </div>
    </div>
  );
};


export default Hero;
