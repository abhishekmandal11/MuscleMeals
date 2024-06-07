import React from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useGetBlogsQuery } from "../../features/blog/blogApiSlice";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const index = () => {
  const { data, isLoading } = useGetBlogsQuery();
  const user = useAuth();
  useTitle("MuscleMeals - My Blogs");

  const updatedData = data?.filter((obj) => obj.author._id === user?.userId);

  return (
    <div className="pt-8 bg-recipe bg-contain bg-no-repeat">
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <AllCards
          mainTitle={
            <div className="text-white p-4">
            "Your MuscleMeals Chronicles"
            </div>
}
          tagline={            <div className="text-white p-4">

            "Dive into a world of your engaging articles and captivating stories on MuscleMeals Chronicles."
            </div>
          }
          type={"blog"}
          data={updatedData}
        />
      )}
    </div>
  );
};

export default index;
