import React from "react";

const coreValues = [
  {
    id: "01",
    title: "Teamwork",
    description:
      "We collaborate with transparency, trust, and respect to achieve extraordinary results.",
  },
  {
    id: "02",
    title: "Quality Excellence",
    description:
      "We ensure every project meets the highest standard with precision and craftsmanship.",
  },
  {
    id: "03",
    title: "Integrity",
    description:
      "We uphold honesty and transparency in every decision and interaction.",
  },
  {
    id: "04",
    title: "Results-Oriented",
    description:
      "We focus on delivering measurable outcomes that create real business impact.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative py-20 px-6 bg-[radial-gradient(circle_at_top_left,_#0b0c1d,_#101225,_#07080f)] text-white">
      
      {/* Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading with Vertical Line */}
        <div className="flex items-start justify-center gap-4 max-w-2xl mx-auto mb-16">

          {/* Vertical Gradient Line */}
          <div
            className="w-[22px] h-[83px] "
            style={{
              background: "linear-gradient(#1E61B8, #7E939A)",
            }}
          ></div>

          {/* Heading Text */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Our Core Values Drive <br /> Everything We Do
            </h2>

            <p className="text-white/70 text-lg mt-4">
              We’re committed to fostering a diverse and inclusive environment where every 
              team member’s unique perspective is celebrated.
            </p>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="
                relative p-8 rounded-2xl 
                backdrop-blur-xl bg-white/5 
                border border-white/10 
                shadow-[0_0_20px_rgba(80,0,255,0.15)]
                hover:shadow-[0_0_35px_rgba(120,60,255,0.4)]
                hover:border-blue-500/40 
                transition-all duration-300
              "
            >
              {/* Number + Title */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-950 rounded-full flex items-center justify-center text-xl font-extrabold shadow-lg">
                  {value.id}
                </div>
                <h3 className="text-2xl font-semibold">{value.title}</h3>
              </div>

              {/* Description */}
              <p className="text-white/70 mt-4 leading-relaxed">
                {value.description}
              </p>

              {/* Glow Ring Bottom */}
              <div className="absolute bottom-0 left-0 right-0 mx-auto w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
