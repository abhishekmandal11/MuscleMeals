import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import dateFormat from "../../common/dateFormat";
import { toast } from "react-toastify";
import { useToggleFavoriteMutation } from "../../features/recipe/recipeApiSlice";
import { setCredentials } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import ShareButton from "../shareButton/ShareButton";
import useAuth from "../../hooks/useAuth";

const SingleCard = ({ singleData, type }) => {
  const user = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleFavorite] = useToggleFavoriteMutation();
  const formattedDate = dateFormat(singleData?.createdAt);
  const sumOfRatings = singleData?.ratings.reduce(
    (sum, item) => sum + item.rating,
    0
  );
  const averageRating =
    sumOfRatings === 0 ? 0 : sumOfRatings / singleData?.ratings.length;

  const handleToggleFavorite = async () => {
    try {
      if (!user) {
        toast.error("You must sign in first");
        return navigate("/auth/signin");
      }
      const userData = await toast.promise(
        toggleFavorite({ recipeId: singleData._id }).unwrap(),
        {
          pending: "Please wait...",
          success: "Favorites updated",
          error: "Unable to update favorites",
        }
      );
      dispatch(setCredentials({ ...userData }));
    } catch (error) {
      toast.error(error.data);
      console.error(error);
    }
  };

  // Function to render symbol based on category
  const renderCategorySymbol = () => {
    switch (singleData?.category) {
      case "Fatloss-Veg":
        return <span className="text-green-500 text-2xl">●</span>; // Green symbol for Fatloss-Veg
      case "Fatloss-Nonveg":
        return <span className="text-red-500 text-2xl">●</span>; // Red symbol for Fatloss-Nonveg
      case "Musclegain-Veg":
        return <span className="text-green-500 text-2xl">●</span>; // Yellow symbol for Musclegain-Veg
      case "Musclegain-Nonveg":
        return <span className="text-red-500 text-2xl">●</span>; // Red symbol for Musclegain-Nonveg
      case "Balanced Diet":
        return <span className="text-yellow-500 text-2xl">●</span>; // Yellow symbol for Balanced Diet
      default:
        return null;
    }
  };
  
  

  return (
<div className="flex flex-col gap-1 rounded-3xl justify-between shadow hover:scale-105 transition duration-300">
      {/* Card Top */}
      <div className="flex flex-col justify-between h-full   ">
        <div className="relative h-full w-full ">
          {/* Only for singleData */}
          {/* Favorite & share button */}
          {type === "recipe" && (
            <div className="absolute top-2 right-0 flex flex-col gap-2 p-2 bg-light rounded-xl z-10">
              {user?.favorites?.some((ele) => ele === singleData._id) ? (
                <AiFillHeart
                  className="text-2xl text-red-500 cursor-pointer"
                  onClick={handleToggleFavorite}
                />
              ) : (
                <AiOutlineHeart
                  className="text-2xl text-red-500 cursor-pointer"
                  onClick={handleToggleFavorite}
                />
              )}
              <ShareButton
                url={`${import.meta.env.VITE_BASE_URL}/recipe/${
                  singleData?._id
                }`}
              />
            </div>
          )}
          {/* Card image */}
          <img
            src={singleData?.image}
            alt={singleData?.title}
            className="w-full object-cover object-center rounded-3xl h-[45vh]"
          />
          {/* Overlay */}
          <div className="absolute bottom-0 left-0 w-full backdrop-blur-sm bg-[#000000d3] p-4 flex justify-between">
            <h4 className="font-bold text-white">{singleData?.author?.name}</h4>
            <span className="text-sm text-white">{formattedDate}</span>
          </div>
        </div>
        {/* Card Bottom details */}
        <div className="flex flex-col gap-3 p-4 ">
          {/* Card heading */}
          <h4 className="font-bold text-lg">{singleData?.title}</h4>
          {/* Card description */}
          <p className="text-sm">
            {singleData?.description.substring(0, 100)}...
          </p>
          {/* Card rating */}
          {type === "recipe" && (
            <Rating
              value={averageRating}
              readOnly
              size={"medium"}
            />
          )}
          {/* Category */}
          {type === "recipe" && (
            <p className="text-sm ">
              {renderCategorySymbol()} Category: {singleData?.category}
            </p>
          )}
        </div>
      </div>
      {/* Read more link */}
      <Link
        to={`/${type}/${singleData?._id}`}
        className="flex gap-2 items-center p-4 mt-4 max-w-max hover:border-primary hover:text-primary "
      >
        Read more
        <BsArrowUpRight />
      </Link>
    </div>
  );
};

export default SingleCard;
