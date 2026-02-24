import Services from "@/components/services";
import Team from "@/components/team";
import About from "../components/about";
import Form from "../components/form";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Project from "@/components/project";
import ProfessionalProfile from "@/components/professionalProfile";
import { NextSeo, OrganizationJsonLd } from "next-seo";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const HomePage = () => {
  const seo = useTranslations("seo");
  const { locale } = useRouter();
  const baseUrl = "https://www.geoequipcam.com";
  const canonicalUrl = locale && locale !== "en" ? `${baseUrl}/${locale}` : baseUrl;
  return (
    <>
      <NextSeo
        title={seo("title")}
        description={seo("description")}
        openGraph={{
          type: "website",
          url: canonicalUrl,
          title: seo("ogTitle"),
          description: seo("ogDescription"),
          locale: locale ?? "en",
          images: [
            {
              url: "https://www.geoequipcam.com/geologo4.jpeg",
              width: 1200,
              height: 630,
              alt: "Geo-Equipment Consultant",
            },
          ],
          site_name: seo("ogTitle"),
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        languageAlternates={[
          { hrefLang: "en", href: baseUrl },
          { hrefLang: "fr", href: `${baseUrl}/fr` },
          { hrefLang: "x-default", href: baseUrl },
        ]}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            name: "keywords",
            content: seo("keywords"),
          },
          {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
          {
            name: "theme-color",
            content: "#0f1624",
          },
        ]}
        canonical={canonicalUrl}
      />
      <OrganizationJsonLd
        type="Organization"
        name="Geo-Equipment Consultant"
        url={baseUrl}
        logo="https://www.geoequipcam.com/geologo4.jpeg"
        contactPoint={[
          {
            contactType: "customer service",
            telephone: "+237 677 355 166",
            email: "constrctr@restate.com",
            areaServed: "CM",
            availableLanguage: ["English", "French"],
          },
        ]}
        address={{
          addressLocality: "Yaoundé",
          addressCountry: "CM",
        }}
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
