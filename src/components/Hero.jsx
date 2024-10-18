import { motion } from "framer-motion";
import { styles } from "../styles"; // Assuming you have styles for text
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Example social icons

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center px-5">
      <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto items-center gap-10 md:gap-20">
        
        {/* Left Section: Text and Buttons */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.h1 
            className={`${styles.heroHeadText} text-white text-4xl md:text-5xl lg:text-6xl`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-[#BE61FE]">Hussain</span>
          </motion.h1>

          <motion.p 
            className={`${styles.heroSubText} text-white-100 text-lg md:text-xl`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Bridging the gap between code and impact <br />
            one experience at a time.
          </motion.p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5">
            <a href="https://www.linkedin.com/in/hussainalireal" target="_blank" className="text-[#FFF] text-3xl hover:text-[#BE61FE] transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/hussiiii" target="_blank" className="text-[#FFF] text-3xl hover:text-[#BE61FE] transition">
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a href="#about">
              <button className="bg-[#BE61FE] text-black px-6 py-3 rounded-full shadow-lg hover:bg-[#FFF] transition">
                About
              </button>
            </a>

            <a href="#contact">
              <button className="border border-[#BE61FE] text-[#FFF] px-6 py-3 rounded-full shadow-lg hover:bg-[#FFF] hover:text-black transition">
                Contact
              </button>
            </a>
          </div>
        </div>

        {/* Right Section: Circular Image */}
        <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="/headshot.jpg" 
            alt="Hussain's Headshot" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
