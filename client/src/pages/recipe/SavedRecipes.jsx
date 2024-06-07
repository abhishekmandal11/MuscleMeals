import React from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";
import useAuth from "../../hooks/useAuth";

const index = () => {
  const { data, isLoading } = useGetRecipesQuery();
  const user = useAuth();

  const updatedData = data?.filter((obj) =>
    user?.favorites?.includes(obj._id.toString())
  );

  return (
    <>
      <div className="pt-8 bg-recipe">
        {isLoading ? (
          <ComponentLoading />
        ) : (
          <AllCards
            mainTitle={
              <div className="text-white p-4">
              "Your Flavorful Collection"</div>
              }
            tagline={
              <div className="text-white p-4">

              "Welcome to your personal culinary treasury - a haven for your favorite recipes!"
              </div>}
            type={"recipe"}
            data={updatedData}
          />
        )}
      </div>
    </>
  );
  
};

export default index;
