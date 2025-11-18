import { useState, useEffect } from 'react';

const OurTeamSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const teamMembers = [
        { id: 1, name: "Samuel Adamson", role: "Technical Support Engineer", img: "/p1.png" },
        { id: 2, name: "Jake Morrison", role: "Product Designer", img: "/p2.png" },
        { id: 3, name: "David Chen", role: "Software Architect", img: "/p3.png" },
        { id: 4, name: "Emma Wilson", role: "UX Researcher", img: "/p4.png" },
        { id: 5, name: "Raj Patel", role: "DevOps Lead", img: "/p5.png" },
        { id: 6, name: "Sarah Matthews", role: "Marketing Director", img: "/p6.png" },
        { id: 7, name: "Faris Khan", role: "Data Scientist", img: "/p7.png" },
        { id: 8, name: "Mike Johnson", role: "Backend Developer", img: "/p8.png" },
        { id: 9, name: "Lisa Anderson", role: "CEO & Founder", img: "/p9.png" },
        { id: 10, name: "Rachel Cooper", role: "Frontend Developer", img: "/p10.png" }
    ];

    const positionConfigs = [
        // P1 (Samuel) at center
        [
            { x: 60, y: 50, scale: 1, zIndex: 10 },      // P1 CENTER
            { x: 32, y: 25, scale: 0.45, zIndex: 6 },    // P2
            { x: 25, y: 48, scale: 0.32, zIndex: 4 },    // P3
            { x: 82, y: 18, scale: 0.42, zIndex: 5 },    // P4
            { x: 85, y: 40, scale: 0.28, zIndex: 3 },    // P5
            { x: 88, y: 65, scale: 0.38, zIndex: 5 },    // P6
            { x: 32, y: 68, scale: 0.32, zIndex: 4 },    // P7
            { x: 78, y: 82, scale: 0.42, zIndex: 6 },    // P8
            { x: 50, y: 88, scale: 0.28, zIndex: 3 },    // P9
            { x: 25, y: 95, scale: 0.52, zIndex: 4 }     // P10
        ],
        // P2 (Jake) at center
        [
            { x: 32, y: 78, scale: 0.42, zIndex: 6 },    // P1
            { x: 55, y: 55, scale: 1, zIndex: 10 },      // P2 CENTER
            { x: 28, y: 42, scale: 0.42, zIndex: 6 },    // P3
            { x: 82, y: 22, scale: 0.38, zIndex: 5 },    // P4
            { x: 42, y: 15, scale: 0.45, zIndex: 6 },    // P5
            { x: 22, y: 18, scale: 0.42, zIndex: 6 },    // P6
            { x: 68, y: 25, scale: 0.28, zIndex: 3 },    // P7
            { x: 85, y: 45, scale: 0.38, zIndex: 5 },    // P8
            { x: 55, y: 96, scale: 0.42, zIndex: 4 },    // P9
            { x: 82, y: 75, scale: 0.42, zIndex: 6 }     // P10
        ],
        // P3 (David) at center
        [
            { x: 27, y: 78, scale: 0.42, zIndex: 6 },    // P1
            { x: 28, y: 45, scale: 0.38, zIndex: 5 },    // P2
            { x: 58, y: 48, scale: 1, zIndex: 10 },      // P3 CENTER
            { x: 82, y: 28, scale: 0.42, zIndex: 6 },    // P4
            { x: 22, y: 20, scale: 0.42, zIndex: 6 },    // P5
            { x: 42, y: 12, scale: 0.38, zIndex: 5 },    // P6
            { x: 62, y: 7, scale: 0.32, zIndex: 4 },    // P7
            { x: 88, y: 58, scale: 0.42, zIndex: 6 },    // P8
            { x: 58, y: 95, scale: 0.48, zIndex: 5 },    // P9
            { x: 85, y: 82, scale: 0.42, zIndex: 6 }     // P10
        ],
        // P4 (Emma) at center
        [
            { x: 25, y: 72, scale: 0.42, zIndex: 6 },    // P1
            { x: 18, y: 42, scale: 0.48, zIndex: 5 },    // P2
            { x: 28, y: 18, scale: 0.32, zIndex: 4 },    // P3
            { x: 52, y: 48, scale: 1, zIndex: 10 },      // P4 CENTER
            { x: 75, y: 28, scale: 0.38, zIndex: 5 },    // P5
            { x: 48, y: 10, scale: 0.32, zIndex: 4 },    // P6
            { x: 66, y: 2, scale: 0.28, zIndex: 3 },    // P7
            { x: 88, y: 45, scale: 0.42, zIndex: 6 },    // P8
            { x: 72, y: 75, scale: 0.42, zIndex: 6 },    // P9
            { x: 45, y: 92, scale: 0.38, zIndex: 5 }     // P10
        ],
        // P5 (Raj) at center
        [
            { x: 22, y: 62, scale: 0.42, zIndex: 6 },    // P1
            { x: 28, y: 30, scale: 0.59, zIndex: 5 },    // P2
            { x: 38, y: 90, scale: 0.32, zIndex: 4 },    // P3
            { x: 85, y: 35, scale: 0.42, zIndex: 6 },    // P4
            { x: 55, y: 52, scale: 1, zIndex: 10 },      // P5 CENTER
            { x: 75, y: 18, scale: 0.38, zIndex: 5 },    // P6
            { x: 62, y: 12, scale: 0.28, zIndex: 3 },    // P7
            { x: 82, y: 62, scale: 0.42, zIndex: 6 },    // P8
            { x: 62, y: 98, scale: 0.42, zIndex: 6 },    // P9
            { x: 18, y: 88, scale: 0.32, zIndex: 4 }     // P10
        ],
        // P6 (Sarah) at center
        [
            { x: 18, y: 55, scale: 0.32, zIndex: 4 },    // P1
            { x: 28, y: 28, scale: 0.32, zIndex: 4 },    // P2
            { x: 23, y: 80, scale: 0.42, zIndex: 6 },    // P3
            { x: 65, y: 15, scale: 0.38, zIndex: 5 },    // P4
            { x: 82, y: 35, scale: 0.32, zIndex: 4 },    // P5
            { x: 52, y: 48, scale: 1, zIndex: 10 },      // P6 CENTER
            { x: 47, y: 8, scale: 0.28, zIndex: 3 },    // P7
            { x: 88, y: 58, scale: 0.42, zIndex: 6 },    // P8
            { x: 72, y: 78, scale: 0.42, zIndex: 6 },    // P9
            { x: 42, y: 82, scale: 0.38, zIndex: 5 }     // P10
        ],
        // P7 (Faris) at center
        [
            { x: 22, y: 60, scale: 0.38, zIndex: 5 },    // P1
            { x: 32, y: 38, scale: 0.28, zIndex: 3 },    // P2
            { x: 30, y: 82, scale: 0.32, zIndex: 4 },    // P3
            { x: 18, y: 28, scale: 0.42, zIndex: 6 },    // P4
            { x: 72, y: 18, scale: 0.28, zIndex: 3 },    // P5
            { x: 48, y: 12, scale: 0.42, zIndex: 6 },    // P6
            { x: 58, y: 48, scale: 1, zIndex: 10 },      // P7 CENTER
            { x: 82, y: 28, scale: 0.32, zIndex: 4 },    // P8
            { x: 78, y: 75, scale: 0.42, zIndex: 6 },    // P9
            { x: 55, y: 92, scale: 0.38, zIndex: 5 }     // P10
        ],
        // P8 (Mike) at center
        [
            { x: 66, y: 88, scale: 0.32, zIndex: 4 },    // P1
            { x: 22, y: 48, scale: 0.38, zIndex: 3 },    // P2
            { x: 32, y: 72, scale: 0.42, zIndex: 6 },    // P3
            { x: 32, y: 20, scale: 0.62, zIndex: 4 },    // P4
            { x: 48, y: 92, scale: 0.51, zIndex: 5 },    // P5
            { x: 68, y: 15, scale: 0.38, zIndex: 5 },    // P6
            { x: 52, y: 12, scale: 0.28, zIndex: 3 },    // P7
            { x: 58, y: 48, scale: 1, zIndex: 10 },      // P8 CENTER
            { x: 82, y: 62, scale: 0.42, zIndex: 6 },    // P9
            { x: 85, y: 32, scale: 0.42, zIndex: 6 }     // P10
        ],
        // P9 (Lisa) at center
        [
            { x: 36, y: 12, scale: 0.42, zIndex: 6 },    // P1
            { x: 22, y: 42, scale: 0.32, zIndex: 4 },    // P2
            { x: 38, y: 82, scale: 0.28, zIndex: 3 },    // P3
            { x: 82, y: 55, scale: 0.42, zIndex: 6 },    // P4
            { x: 18, y: 70, scale: 0.49, zIndex: 4 },    // P5
            { x: 68, y: 20, scale: 0.28, zIndex: 3 },    // P6
            { x: 52, y: 12, scale: 0.28, zIndex: 3 },    // P7
            { x: 18, y: 22, scale: 0.32, zIndex: 4 },    // P8
            { x: 55, y: 50, scale: 1, zIndex: 10 },      // P9 CENTER
            { x: 68, y: 93, scale: 0.42, zIndex: 6 }     // P10
        ],
        // P10 (Rachel) at center
        [
            { x: 64, y: 92, scale: 0.42, zIndex: 6 },    // P1
            { x: 45, y: 88, scale: 0.32, zIndex: 4 },    // P2
            { x: 24, y: 57, scale: 0.42, zIndex: 6 },    // P3
            { x: 75, y: 15, scale: 0.32, zIndex: 4 },    // P4
            { x: 32, y: 82, scale: 0.28, zIndex: 3 },    // P5
            { x: 28, y: 18, scale: 0.63, zIndex: 6 },    // P6
            { x: 62, y: 12, scale: 0.28, zIndex: 3 },    // P7
            { x: 85, y: 38, scale: 0.38, zIndex: 5 },    // P8
            { x: 82, y: 68, scale: 0.42, zIndex: 6 },    // P9
            { x: 52, y: 48, scale: 1, zIndex: 10 }       // P10 CENTER
        ]
    ];

    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 10);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentPositions = positionConfigs[activeIndex];
    const activeMember = teamMembers[activeIndex];

    return (
        <>
            <div className="bg-[#1E1C26] py-15">
                <div className='flex justify-center'>
                    <h2 className="text-[42px] font-semibold text-[#FFFFFF] leading-12 pb-[21px] flex items-center gap-[23px]">
                        <span
                            className="inline-block w-3 h-[62px]"
                            style={{ background: 'linear-gradient(rgb(30, 97, 184) 0%, rgb(126, 147, 154) 100%)' }}
                        />
                        <span>Our Team</span>
                    </h2>
                </div>

                <div className="flex items-center justify-center">
                    <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                        {/* Left Side - Active Member Info */}
                        <div className="w-full lg:w-[35%] text-white space-y-4">


                            <div className="space-y-2 transition-all duration-500">
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-right">{activeMember.name}</h1>
                                <p className="text-gray-400 text-base md:text-lg uppercase tracking-wider  text-right">{activeMember.role}</p>
                            </div>


                        </div>

                        {/* Right Side - Profiles Carousel */}
                        <div className="w-full lg:w-[65%] relative" style={{ height: '500px', maxHeight: '80vh' }}>
                            {teamMembers.map((member, index) => {
                                const pos = currentPositions[index];
                                const isActive = index === activeIndex;

                                return (
                                    <div
                                        key={member.id}
                                        className="absolute rounded-full overflow-hidden shadow-2xl cursor-pointer transition-all duration-1000 ease-in-out"
                                        style={{
                                            left: `${pos.x}%`,
                                            top: `${pos.y}%`,
                                            transform: `translate(-50%, -50%) scale(${pos.scale})`,
                                            width: '320px',
                                            height: '320px',
                                            zIndex: pos.zIndex,
                                            opacity: isActive ? 1 : 0.85
                                        }}
                                    onClick={() => setActiveIndex(index)}
                                    >
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {isActive && (
                                            <div className="absolute inset-0 ring-4 ring-blue-500 ring-offset-4 ring-offset-slate-900 rounded-full pointer-events-none"></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default OurTeamSection;