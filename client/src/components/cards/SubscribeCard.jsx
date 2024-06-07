import React from "react";
import { Button } from "..";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSubscribeUserMutation } from "../../features/user/userApiSlice";

const SubscribeCard = ({
  title,
  icon,
  price,
  subtitle,
  features,
  featureTitle,
  btnText,
  link,
}) => {
  const [subscribeUser] = useSubscribeUserMutation();

  const handleClick = async () => {
    try {
      const { url } = await subscribeUser().unwrap();
      window.location.href = url;
    } catch (error) {
      toast.error(error.data);
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center md:items-start gap-1 shadow bg-neutral-900 rounded-lg p-8 hover:shadow-lg hover:scale-105 transition duration-300 w-full">
      <div className="flex gap-3 items-center">
        {icon}
        <h3 className="font-bold text-xl text-white">{title}</h3>
      </div>
      <p className="text-white text-sm ">{subtitle}</p>
      <h4 className="font-bold text-white text-3xl my-4">{price}</h4>
      {link ? (
        <Link
          to={link}
          className="w-full"
        >
          <Button
            content={btnText}
            customCss={"rounded text-sm w-full"}
          />
        </Link>
      ) : (
        <Button
          content={btnText}
          handleClick={handleClick}
          customCss={"rounded text-sm w-full"}
        />
      )}
      <div className="flex gap-2 flex-col mt-4">
        <h4 className="font-bold text-white">{featureTitle}</h4>
        <ul className="flex flex-col gap-2">
          {features?.map((feature) => (
            <li
              className="flex gap-2 items-center"
              key={feature}
            >
              <BsCheckLg className="text-primary" />
              <span className="text-white text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscribeCard;
