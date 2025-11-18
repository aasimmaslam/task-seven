import Footer from "../components/Footer"
import GetStartedForm from "../components/GetStartedForm/GetStartedForm"
import OurTeamSection from "../components/our-team/OurTeamSection"

const AboutUsPage = () => {
  return (
    <>
     <div>
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
