import Footer from "../components/Footer"
import GetStartedForm from "../components/GetStartedForm/GetStartedForm"
import OurTeamSection from "../components/our-team/OurTeamSection"
import { useEffect } from "react";
import VisionMission from "../components/VisionMission";
import CEOMessage from "../components/CEOMessage";


const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // forces scroll to top when page loads
  }, []);
  return (
    <>
      <div>
        <div className="bg-[#1E1C26]">
          <VisionMission />
          <CEOMessage />
        </div>
        <div>
          <OurTeamSection />
        </div>
        <div>
          <GetStartedForm />
        </div>

        <div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default AboutUsPage
