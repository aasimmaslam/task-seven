import React from "react";

const CEOMessage: React.FC = () => {
  return (
    <section className="w-full max-w-[1264px] mx-auto  px-4 py-12 text-white">

      {/* Title + Bar */}
      <div className="flex items-center gap-[19px] mb-[25px]">
        <span className="w-[12px] h-[83px] bg-gradient-to-b from-[#1E61B8] to-[#7E939A]"></span>

        <h2 className="font-gilroy font-bold text-[32px] md:text-[43px] leading-[120%]">
          Our CEO Message
        </h2>
      </div>

      {/* Inverted Comma (slightly right aligned) */}
      <img
        src="/Vector (3).png"
        alt="quote"
        className="w-[60px] h-[47px] mb-[34px] ml-[35px]"
      />

      {/* Main Message */}
      <p className="text-center font-gilroy font-bold text-[10px] md:text-[36px] leading-[119%] max-w-[1175px] mx-20 mb-[36px]">
        Devzz Tech Solutions, for more than two decades, has successfully
        pursued innovative strategies and cutting-edge approaches.
      </p>

      {/* Sub Message */}
      <p className="text-center font-gilroy text-[16px] md:text-[20px] leading-[150%] max-w-[1175px] mx-auto mt-[60px] mb-[82px] opacity-90">
        We’re committed to fostering a diverse and inclusive environment where
        every team member’s unique perspective is celebrated. We’re committed to
        fostering a diverse and inclusive environment where every team member’s
        unique perspective is celebrated. We’re committed to fostering a diverse
        and inclusive environment.
      </p>

      {/* CEO Name + Role */}
      <div className="text-center">
        <p className="font-gilroy font-bold text-[22px] md:text-[25px]">Saif Ali Mughal</p>

        <p className="font-gilroy text-[8px] md:text-[20px] mt-1 text-white">
          Founder <span className="font-gilroy font-bold text-white">&</span> Strategic Lead
        </p>
      </div>
      
    </section>
  );
};

export default CEOMessage;
