import React from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const index = () => {
  const { data, isLoading } = useGetRecipesQuery();
  const user = useAuth();
  useTitle("MuscleMeals - My Recipes");

  const updatedData = data?.filter((obj) => obj.author._id === user?.userId);

  return (
    <div className="pt-8 bg-recipe bg-contain bg-no-repeat">
    {isLoading ? (
        <ComponentLoading />
      ) : (
        <AllCards
          mainTitle={
            <div className="text-white p-4">
            "Your Original Creations"
            </div>

            }
          tagline={
            <div className="text-white p-4">

            "Welcome to your dedicated space where your imagination takes the lead."
            </div>

          }
          type={"recipe"}
          data={updatedData}
        />
      )}
    </div>
  );
};

export default index;
