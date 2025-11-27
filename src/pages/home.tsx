import Services from "@/components/services";
import Team from "@/components/team";
import About from "../components/about";
import Form from "../components/form";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Project from "@/components/project";
import ProfessionalProfile from "@/components/professionalProfile";
import { NextSeo } from "next-seo";

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="Geo-Consultancy Real Estate & Geomatics Expertise"
        description="GEO-EQUIPMENT CONSULTANT delivers real-estate development, construction-equipment rental, and geospatial surveying services—ranging from contracts and negotiations to topographic studies, cadastral control, and GNSS/geodetic expertise for public infrastructure."
        openGraph={{
          type: "website",
          url: "https://www.geoequipcam.com",
          title: "Geo-Consultancy Real Estate",
          description:
            "Promoteur immobilier, Location des engins matériel de construction, Matériel de génie civil, Études, Contrats, Négociation et Commerce général",
          images: [
            {
              url: "https://www.geoequipcam.com",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
          site_name: "Geo-Equipment Consultant",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            name: "keywords",
            content:
              "Geo-Equipment Consultant, real estate, heavy equipment rental, GNSS geodesy, drone photogrammetry, cadastral surveying, infrastructure mapping",
          },
        ]}
        canonical="https://www.geoequipcam.com"
      />
      <div>
        <Hero
          address="Yaounde, Cameroon"
          phone="(929) 123-4567"
          email="constrctr@restate.com"
        />
        <About
          cardTitle1="10 years"
          cardSubText1="in business"
          cardTitle2="20-500 Million fcfa"
          cardSubText2="turnover"
          cardTitle3="1000"
          cardSubText3="transactions"
        />
        <Team />
        <Services />
        <ProfessionalProfile />
        <Project />
        <Form />
      </div>
    </>
  );
};

export default HomePage;
