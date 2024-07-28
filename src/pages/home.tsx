import Services from '@/components/services';
import Team from '@/components/team';
import About from '../components/about';
import Form from '../components/form';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Project from '@/components/project';
import { NextSeo } from 'next-seo';



const HomePage = () => {
  return (
    <>
      <NextSeo
        title="Geo-Consultancy Real Estate"
        description="GEO-EQUIPEMENT CONSULTANT COVERS
Real State
Renting And Selling Of Construction Equipment
Constracts
Negotiation
Topographic Studies And Performance Of Public Procurement
General Trade"
        openGraph={{
          type: 'website',
          url: 'https://www.geoequipcam.com',
          title: 'Geo-Consultancy Real Estate',
          description: 'Gopographic Studies And Performance Of Public Procurement,renting And Selling Of Construction Equipment',
          images: [
            {
              url: 'https://www.geoequipcam.com',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
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
        <Project />
        <Form />
      </div>
    </>
  );
};

export default HomePage;
