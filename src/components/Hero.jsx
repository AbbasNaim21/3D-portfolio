import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Abbas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span>I develop</span>
            <TypeAnimation
              cursor={false} // omit the default css typing animation class, otherwise we won't be able to manipulate it manually
              className={"text-[#915eff]"} // pass custom cursor className that will be manipulated (defaults below)
              sequence={[
                " Web Applications,",
                500,
                " 3D visuals,",
                500,
                " UI/UX,",
                500,
                " mobile applications,",
                500,
                " I build full-stack applications using ReactJS and Next.js with Tailwind CSS. I'm experienced in MERN stack development and also work with Firebase and MongoDB.",
                100,
                () => setDisplayText(true),
              ]}
              repeat={0}
            />
          </p>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, UI/UX
            <br className="sm:block hidden" />
            and web & mobile applications.
          </p> */}
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
