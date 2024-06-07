import React from "react";
import { Link } from "react-router-dom";
import { logoNoBg } from "../../assets";

const Logo = ({ customCss, hideName = false }) => {
  return (
    <Link
      to={"/"}
      className={`max-w-max ${customCss}`}
    >
      <div className="flex gap-1.5 items-center">
        <div className="w-12">
          <img
            src={logoNoBg}
            alt="MuscleMeals logo"
            className="w-full h-full"
          />
        </div>
        {!hideName && <h1 className="font-bold text-xl text-black hover:scale-105 transition duration-300"> <span className="text-primary">Muscle</span>Meals</h1>}
      </div>
    </Link>
  );
};

export default Logo;
