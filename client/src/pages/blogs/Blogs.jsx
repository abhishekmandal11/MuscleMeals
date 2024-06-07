import React, { useEffect } from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useDispatch } from "react-redux";
import { setBlogs } from "../../features/blog/blogSlice";
import { useGetBlogsQuery } from "../../features/blog/blogApiSlice";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  const { data, isLoading } = useGetBlogsQuery();
  const dispatch = useDispatch();
  useTitle("MuscleMeals - All Blogs");

  useEffect(() => {
    if (!isLoading) {
      dispatch(setBlogs(data));
    }
  }, [isLoading]);

  return (
    <div className="pt-8 bg-recipe bg-contain bg-no-repeat">
    {isLoading ? (
        <ComponentLoading />
      ) : (
        <AllCards
        mainTitle={
          <div className="text-white p-4">
            Empower Your Gym Experience
          </div>
        }  
        tagline={
          <div className="text-white my-3">Explore a variety of informative blog posts tailored for gym enthusiasts to inspire and inform your fitness recipe endeavors.
          </div>
        }          type={"blog"}
          data={data}
        />
      )}
    </div>
  );
  
};

export default Blogs;
