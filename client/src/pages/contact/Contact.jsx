import React, { useState } from "react";
import { Button, Input } from "../../components";
import { IoMailOutline } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";


const Contact = () => {
  const user = useAuth();
  useTitle("MuscleMeals - Contact Us");

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: user?.email || "",
    message: "",
  });
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  return (
   

    <section className="box shadow-xl bg-gradient-to-b from-slate-200 to-white rounded-3xl py-10 flex flex-col-reverse md:flex-row w-full gap-12 md:gap-6 justify-center items-center my-10">
      {/* Contact page left */}
      
      {/* Contact form container */}
      <div className="basis-1/2 lg:basis-1/4 m-auto flex flex-col">
        {/* Contact form container details */}
        <div className="mb-8 flex flex-col gap-3">
          <h2 className="font-bold text-3xl text-black">We'd love to help</h2>
          <p className="text-sm text-black">
            Reach out and we'll get in touch in 24 hours
          </p>
        </div>
        {/* Contact form */}
        <form
          className="flex flex-col gap-4 text-black"
          action={`https://formspree.io/f/${
            import.meta.env.VITE_FORMIK_SECRET
          }`}
          method="POST"
        >
          <div className="flex gap-4  flex-col sm:flex-row md:flex-col lg:flex-row">
            <Input
              type={"text"}
              id={"firstName"}
              icon={<AiOutlineUser />}
              handleChange={handleChange}
              value={formDetails.firstName}
              label={"First Name"}
              placeholder={"Abhishek"}
              errorMessage={
                "Should be more than 3 characters long and should not include special characters!"
              }
              pattern={"^[a-zA-Z]{3,}(?: [a-zA-Z]{3,})*$"}
            /> 
            <Input
              type={"text"}
              id={"lastName"}
              icon={<AiOutlineUser />}
              handleChange={handleChange}
              value={formDetails.lastName}
              label={"Last Name"}
              placeholder={"Mandal"}
              errorMessage={
                "Should be more than 3 characters long and should not include special characters!"
              }
              pattern={"^[a-zA-Z]{3,}(?: [a-zA-Z]{3,})*$"}
            />
          </div>
          
          <Input
            type={"email"}
            id={"email"}
            icon={<IoMailOutline />}
            handleChange={handleChange}
            value={formDetails.email}
            label={"Email"}
            placeholder={"example@abc.com"}
            errorMessage={"Enter a valid email address!"}
            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
            
          />
          
       
          <div className="flex flex-col text-black relative ">
            <label
              htmlFor="message"
              className="text-sm font-semibold mb-3"
            >
              Message
            </label>
            <textarea
              onChange={handleChange}
              value={formDetails.message}
              id="message"
              name="message"
              rows={6}
              onBlur={handleFocus}
              focused={focused.toString()}
              required
              aria-required="true"
              aria-describedby="message-error"
              placeholder="Write Your Message"
              className="py-2 px-4 border bg-gray-100 rounded-lg focus:outline outline-primary"
              pattern={/^.{10,}$/}
            />
            <span
              id="message-error"
              className="hidden text-red-500 pl-2 text-sm mt-1"
            >
              Message should be at least 10 characters long!
            </span>
          </div>
          <Button
            content={"Send message"}
            icon={<FaRegPaperPlane />}
            type={"submit"}
            customCss={"rounded-lg gap-3"}
          />
        </form>
      </div>
      <div className="basis-1/2 lg:basis-1/3 shadow-xl  bg-primaryLight text-white mx-10 px-10 py-20 rounded-2xl h-full w-full sm:w-[80%] md:w-full text-center md:text-start hover:scale-105 transition duration-300">
        <h3 className="font-bold text-xl mb-6 text-white">Get in touch</h3>
       
        <div className="mb-5 flex flex-col gap-1">
          <h4 className="font-bold text-white">Chat with us</h4>
          <p>Our team is here to help</p>
          <a href="mailto:musclemeals@xyz.com" className="font-semibold text-sm">musclemeals@xyz.com</a>
        </div>
        <div className="mb-5 flex flex-col gap-1">
          <h4 className="font-bold text-white">Call us</h4>
          <p>Mon-Fri from 9am to 6pm</p>
          <a href="tel:+919876543210" className="font-semibold text-sm">+91 9876543210</a>
        </div>
        <div className="mb-5 flex flex-col gap-3">
          <h4 className="font-bold text-white">Social media</h4>
          <ul className="flex justify-center md:justify-start gap-4 text-xl">
            <motion.li
              className="hover:text-black"
              whileHover={{ y: -4 }}
            >
              <a href="https://github.com/abhishekmandal11">
                <AiFillGithub />
              </a>
            </motion.li>
           
            <motion.li
              className="rounded-full hover:text-black"
              whileHover={{ y: -4 }}
            >
              <a href="https://www.linkedin.com/in/abhishekmandal11">
                <AiFillLinkedin />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
   

  );
  
};

export default Contact;