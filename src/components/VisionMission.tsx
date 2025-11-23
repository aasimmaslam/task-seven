import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="w-full max-w-[1264px] mx-auto h-auto py-10 px-4  flex flex-col lg:flex-row gap-10 lg:gap-0">

      {/* LEFT IMAGE */}
      <div className="w-full lg:w-[721px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[610px]">
        <img
          src="/our_team_image 1 (1).png"
          alt="VR Person"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-[543px] lg:ml-12 flex flex-col gap-20 justify-center text-white">

        {/* VISION */}
        <div>
          {/* Bar + Heading with 19px gap */}
          <div className="flex items-center gap-[19px]">

            {/* BAR (12px x 62px with gradient) */}
            <span className="w-[12px] h-[62px] bg-gradient-to-b from-[#1E61B8] to-[#7E939A]"></span>

            {/* Heading */}
            <h2 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[43px] leading-[120%]">
              Our Vision
            </h2>
          </div>

          {/* Paragraph – 40px gap */}
          <p className="mt-[40px] font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[150%] opacity-80">
            To empower businesses with cutting-edge digital solutions,
            combining creativity and technology to deliver seamless,
            scalable, and high-performance experiences.
          </p>
        </div>

        {/* MISSION */}
        <div>
          <div className="flex items-center gap-[19px]">

            {/* BAR (same gradient bar) */}
            <span className="w-[12px] h-[62px] bg-gradient-to-b from-[#1E61B8] to-[#7E939A]"></span>

            <h2 className="font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[43px] leading-[120%]">
              Our Mission
            </h2>
          </div>

          <p className="mt-[40px] font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[150%] opacity-80">
            To empower businesses with cutting-edge digital solutions,
            combining creativity and technology to deliver seamless,
            scalable, and high-performance experiences.
          </p>
        </div>

      </div>

    </section>
  );
};

export default VisionMission;
