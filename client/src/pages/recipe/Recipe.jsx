import React, { useState, useEffect } from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useDispatch } from "react-redux";
import { setRecipes } from "../../features/recipe/recipeSlice";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";
import useTitle from "../../hooks/useTitle";

const Recipe = () => {
  const { data, isLoading } = useGetRecipesQuery();
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState("all"); // Default filter: show all recipes
  useTitle("MuscleMeals - All Recipes");

  useEffect(() => {
    if (!isLoading) {
      dispatch(setRecipes(data));
      setFilteredData(data); // Initially set filteredData to all recipes
    }
  }, [isLoading, data, dispatch]);

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    // Filter recipes based on selected category
    const filteredRecipes = data.filter((recipe) => {
      if (selectedFilter === "all") {
        return true; // Show all recipes
      } else {
        return recipe.category === selectedFilter;
      }
    });
    setFilteredData(filteredRecipes);
  };

  return (
    <>
      {/* Only display recent recipes section if no filter is selected */}
      {filter === "all" && (
        <div className="pt-8 bg-recipe bg-contain bg-no-repeat">
          <AllCards
mainTitle={
  <div className="text-white p-4">
    Fuel Your Fitness Journey
  </div>
}           
 tagline={
  <div className="text-white">
    Delight in a diverse collection of mouthwatering recipes, curated and shared by passionate food enthusiasts.
  </div>
}
            type={"recipe"}
            data={filteredData} // Pass filtered data to AllCards component
            filterOptions={(
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="Fatloss-Veg">Fatloss-Veg</option>
                <option value="Fatloss-Nonveg">Fatloss-Nonveg</option>
                <option value="Musclegain-Veg">Musclegain-Veg</option>
                <option value="Musclegain-Nonveg">Musclegain-Nonveg</option>
                <option value="Balanced Diet">Balanced Diet</option>
              </select>
            )}
          />
        </div>
      )}
  
      {/* Fatloss-Veg recipes section */}
      {filter === "Fatloss-Veg" && (
        <div className="pt-8">
          <AllCards
            mainTitle={"Fatloss-Veg Recipes"}
            type={"recipe"}
            data={filteredData.filter((recipe) => recipe.category === "Fatloss-Veg")}
            filterOptions={(
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="Fatloss-Veg">Fatloss-Veg</option>
                <option value="Fatloss-Nonveg">Fatloss-Nonveg</option>
                <option value="Musclegain-Veg">Musclegain-Veg</option>
                <option value="Musclegain-Nonveg">Musclegain-Nonveg</option>
                <option value="Balanced">Balanced</option>
              </select>
            )}
          />
        </div>
      )}
  
      {/* Fatloss-Nonveg recipes section */}
      {filter === "Fatloss-Nonveg" && (
        <div className="pt-8">
          <AllCards
            mainTitle={"Fatloss-Nonveg Recipes"}
            type={"recipe"}
            data={filteredData.filter((recipe) => recipe.category === "Fatloss-Nonveg")}
            filterOptions={(
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="Fatloss-Veg">Fatloss-Veg</option>
                <option value="Fatloss-Nonveg">Fatloss-Nonveg</option>
                <option value="Musclegain-Veg">Musclegain-Veg</option>
                <option value="Musclegain-Nonveg">Musclegain-Nonveg</option>
                <option value="Balanced">Balanced</option>
              </select>
            )}
          />
        </div>
      )}
  
      {/* Musclegain-Veg recipes section */}
      {filter === "Musclegain-Veg" && (
        <div className="pt-8">
          <AllCards
            mainTitle={"Musclegain-Veg Recipes"}
            type={"recipe"}
            data={filteredData.filter((recipe) => recipe.category === "Musclegain-Veg")}
            filterOptions={(
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="Fatloss-Veg">Fatloss-Veg</option>
                <option value="Fatloss-Nonveg">Fatloss-Nonveg</option>
                <option value="Musclegain-Veg">Musclegain-Veg</option>
                <option value="Musclegain-Nonveg">Musclegain-Nonveg</option>
                <option value="Balanced">Balanced</option>
              </select>
            )}
          />
        </div>
      )}
  
      {/* Musclegain-Nonveg recipes section */}
      {filter === "Musclegain-Nonveg" && (
        <div className="pt-8">
          <AllCards
            mainTitle={"Musclegain-Nonveg Recipes"}
            type={"recipe"}
            data={filteredData.filter((recipe) => recipe.category === "Musclegain-Nonveg")}
            filterOptions={(
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="Fatloss-Veg">Fatloss-Veg</option>
                <option value="Fatloss-Nonveg">Fatloss-Nonveg</option>
                <option value="Musclegain-Veg">Musclegain-Veg</option>
                <option value="Musclegain-Nonveg">Musclegain-Nonveg</option>
                <option value="Balanced">Balanced</option>
              </select>
            )}
          />
        </div>
      )}
  
      {/* Balanced recipes section */}
      {filter === "Balanced" && (
        <div className="pt-8">
          <AllCards
            mainTitle={"Balanced Recipes"}
            type={"recipe"}
            data={filteredData.filter((recipe) => recipe.category === "Balanced")}
            filterOptions={(
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="Fatloss-Veg">Fatloss-Veg</option>
                <option value="Fatloss-Nonveg">Fatloss-Nonveg</option>
                <option value="Musclegain-Veg">Musclegain-Veg</option>
                <option value="Musclegain-Nonveg">Musclegain-Nonveg</option>
                <option value="Balanced">Balanced</option>
              </select>
            )}
          />
        </div>
      )}
    </>
  );
  
};

export default Recipe;
