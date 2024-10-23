import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images";
import { genServices, people } from "../../constants/constants";
import GenCard from "../components/about/GenCard";
import Services from "../components/home/Services";
import OurStory from "../components/about/OurStory";
import PersonCard from "../components/about/PersonCard";

const About: React.FC = () => {
  return (
    <section className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>About</span>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch lg:gap-10 mb-10 md:mb-16">
        <div className="">
          <OurStory />
        </div>
        <div>
          <img src={images.story} alt="story image" className="w-full" />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-2 mb-10 md:mb-16">
        {genServices.map((item) => (
          <GenCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="mb-10 md:mb-16 flex flex-wrap lg:flex-nowrap flex-col md:flex-row justify-between gap-3">
        {people.map((person, index)=> (<PersonCard key={index} {...person}/>))}
      </div>
      <div className="mb-10 md:mb-16">
        <Services />
      </div>
    </section>
  );
};

export default About;
