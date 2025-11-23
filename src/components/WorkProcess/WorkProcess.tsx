import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Picture5 from "../../images/Picture5.png";
import Picture6 from "../../images/Picture6.png";
import Picture7 from "../../images/Picture7.png";
import Picture8 from "../../images/Picture8.png";
import GetStartedLine from "../../images/colorline.png";

const WorkProcess = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: "Discover & Strategize",
      icon: Picture5,
      description:
        "We begin by understanding your business, goals, and challenges to design a clear strategy that drives measurable success.",
    },
    {
      num: 2,
      title: "Design & Develop",
      icon: Picture6,
      description:
        "Our creative and technical teams craft user-centric designs and robust development solutions that bring ideas to life.",
    },
    {
      num: 3,
      title: "Launch & Support",
      icon: Picture7,
      description:
        "After rigorous testing, we launch your product seamlessly and continue to provide maintenance and support post-deployment.",
    },
    {
      num: 4,
      title: "Test & Refine",
      icon: Picture8,
      description:
        "We continuously test, refine, and optimize to ensure lasting performance and future scalability for your project.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p < 4 ? p + 0.5 : 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0B0C10] text-white py-16 px-4 sm:px-6 md:px-10 flex flex-col items-center relative">
      {/* Section Heading */}
      <div className="max-w-3xl text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img
            src={GetStartedLine}
            alt="line"
            className="w-[10px] sm:w-[12px] h-[50px] sm:h-[62px]"
          />
          <h1 className="text-[28px] sm:text-[36px] md:text-[43px] font-normal leading-[120%]">
            Our Work Process
          </h1>
        </div>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-[600px] mx-auto">
          At Devzz Tech, our streamlined work process ensures efficiency,
          quality, and innovation at every stage of your project. Here’s how we
          make it happen:
        </p>
      </div>

      {/* Progress Bar / Steps */}
      <div className="flex items-center w-full max-w-[1000px] mt-12 gap-0 ml-25">
        {steps.map((step, idx) => {
          const raw = progress - step.num;
          const fillRatio = Math.min(Math.max(raw, 0), 1);
          const fillPercent = fillRatio * 100;

          return (
            <div
              key={step.num}
              className="flex items-center flex-1 w-full md:w-auto"
            >
              {/* Circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.2 + idx * 0.2,
                  type: "spring",
                  mass: 1,
                  stiffness: 100,
                  damping: 15,
                }}
                className="relative w-[70px] sm:w-[87px] h-[70px] sm:h-[87px] shrink-0 rounded-full flex items-center justify-center cursor-pointer z-10"
                onClick={() => setSelectedStep(step.num)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.2 + idx * 0.2,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 p-[4px] sm:p-[6px] rounded-full"
                  style={{
                    background:
                      progress > step.num
                        ? "linear-gradient(180deg, #1E61B8, #7E939A)"
                        : "#fff",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#1E1C26]" />
                </motion.div>

                <div className="absolute w-[60px] sm:w-[75px] h-[60px] sm:h-[75px] flex items-center justify-center text-[24px] sm:text-[38px] font-bold text-white rounded-full">
                  {step.num.toString().padStart(2, "0")}
                </div>
              </motion.div>

              {/* Connector */}
              {step.num !== steps.length && (
                <div className="relative flex-1 h-[4px] bg-white rounded overflow-hidden">
                  <motion.div
                    className="absolute inset-0 rounded"
                    style={{
                      background: "linear-gradient(90deg, #1E61B8, #7E939A)",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${fillPercent}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Process Boxes */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-[66px] mt-16 w-full max-w-[1290px]">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1E1C26] rounded-2xl w-[180px] sm:w-[230px] h-[180px] sm:h-[230px] flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedStep(step.num)}
          >
            <img
              src={step.icon}
              alt={step.title}
              className="w-12 sm:w-16 h-12 sm:h-16 mb-4 object-contain"
            />
            <h3 className="text-sm sm:text-lg font-semibold">{step.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1E1C26] rounded-2xl max-w-md w-full p-6 sm:p-8 text-center relative border border-white/10"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedStep(null)}
              >
                ✕
              </button>
              <img
                src={steps[selectedStep - 1].icon}
                alt="icon"
                className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4"
              />
              <h2 className="text-lg sm:text-2xl font-bold mb-2">
                {steps[selectedStep - 1].title}
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {steps[selectedStep - 1].description}
              </p>
              <button
                onClick={() => setSelectedStep(null)}
                className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-[#1E90FF] to-[#1E90FF] rounded-full text-white hover:opacity-90 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkProcess;
