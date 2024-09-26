import React, { useState } from "react"; // Importing React and useState for state management
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Importing timeline components
import { motion } from "framer-motion"; // Importing motion for animations
import "react-vertical-timeline-component/style.min.css"; // Importing timeline styles
import { styles } from "../styles"; // Importing styles
import { experiences } from "../constants/"; // Importing experience data
import { textVariant } from "../utils/motion"; // Importing motion utility
import { HiX } from "react-icons/hi"; // Importing a close icon from react-icons

const Mempelai = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image

  // Function to handle image click
  const handleImageClick = (img) => {
    setSelectedImage(img); // Set the selected image to display in full view
  };

  // Function to close the full image view
  const closeImage = () => {
    setSelectedImage(null); // Reset the selected image to null
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Bride's Story.
        </h2>
        <p className={`${styles.sectionSubText} text-center rounded-[20px]`}>
          About couples
        </p>
      </motion.div>

      <motion.div
        id="mempelai"
        className="mt-20 flex flex-col rounded-[20px] mx-auto max-w-[1200px] px-4 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onImageClick={handleImageClick} // Pass the handleImageClick function
            />
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* Render full image modal if an image is selected */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage} // Close image when background is clicked
        >
          <motion.img
            src={selectedImage}
            alt="Full size"
            className="w-auto h-auto max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when image is clicked
          />
          {/* Close button without background */}
          <button
            onClick={closeImage}
            className="" // Adjust size as needed
          >
            <HiX /> {/* Use the close icon */}
          </button>
        </motion.div>
      )}
    </>
  );
};

const ExperienceCard = ({ experience, onImageClick }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff",
        color: "#000000",
        borderRadius: "70px",
        padding: "30px",
        marginBottom: "50px",
        boxShadow: "1px 10px 50px rgba(0, 0, 0, 0.1)",
      }}
      iconStyle={{
        background: "transparent",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
        width: "100px",
        height: "100px",
        transform: "translateX(-20%)",
        zIndex: 10,
      }}
      icon={
        <motion.div
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
          }}
          whileTap={{ scale: 1.5 }}
          className="flex justify-center items-center w-full h-full rounded-full"
          onClick={() => onImageClick(experience.icon)} // Call the function to display image
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div>
          <p
            className="text-black text-[15px] md:text-[16px] font-bold rounded-full"
            style={{ margin: 0 }}
          >
            {experience.date}
          </p>
          <h3 className="text-black text-[15px] md:text-[24px] font-bold rounded-full">
            {experience.title}
          </h3>
          <p
            className="text-black text-[10px] md:text-[16px] font-semibold rounded-full"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-black-100 text-[12px] md:text-[14px] pl-1 tracking-wider rounded-full"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

export default Mempelai;
