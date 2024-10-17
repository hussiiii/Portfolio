import React from "react";
import { motion } from "framer-motion";
import { github, meridian } from "../assets";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, sourceCodeLink, websiteLink, dateRange }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="bg-tertiary p-7 rounded-xl w-[360px] h-auto shadow-lg flex flex-col justify-between"
    >
      {/* Image Section */}
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover rounded-lg mb-6"
      />

      {/* Content Section */}
      <div className="text-white flex-grow">
        <h3 className="text-[24px] font-bold">{name}</h3>
        <p className="text-gray-400 text-sm mb-3">{dateRange}</p>
        <p className="text-gray-300 text-[16px] mb-5">{description}</p>

        <div className="flex flex-wrap gap-3 mb-5">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-800 text-white text-sm px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button Section */}
      <div className="flex items-center gap-3 mt-auto">
        {/* Conditionally render Website button */}
        {websiteLink !== "/" && (
          <a 
            href={websiteLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            <img 
              src={meridian} 
              alt="globe" 
              className="w-5 h-5"
            /> 
            Website
          </a>
        )}

        {/* Conditionally render Source button */}
        {sourceCodeLink !== "/" && (
          <a 
            href={sourceCodeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            <img 
              src={github} 
              alt="GitHub" 
              className="w-5 h-5"
            />
            Source
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
