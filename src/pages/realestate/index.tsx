import { NextSeo } from "next-seo";
import Image, { StaticImageData } from "next/image";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const products1 = [
  {
    id: 1,
    name: "Site Plan",
    href: "#",
    price: "",
    description: "One",
    imageSrc: "/images/geo76.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Site Plan with the OutSide",
    href: "#",
    price: "",
    description: "Two",
    imageSrc: "/images/geo67.jpeg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Inside Plan",
    href: "#",
    price: "",
    description: "three",
    imageSrc: "/images/geo74.jpeg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
  {
    id: 3,
    name: "Card Design",
    href: "#",
    price: "",
    description: "Four",
    imageSrc: "/images/geo19.jpeg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 9,
    name: "Handling Of Keys",
    href: "*",
    price: "",
    description: "Five",
    imageSrc: "/images/geo58.jpeg",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  {
    id: 9,
    name: "The Inside",
    href: "*",
    price: "",
    description: "Six",
    imageSrc: "/images/geo59.jpeg",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];
const products2 = [
  {
    id: 7,
    name: "The Inside Plan",
    href: "#",
    price: "",
    description: "Seven",
    imageSrc: "/images/geo70.jpeg",
    imageAlt:
      "Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.",
  },
  {
    id: 8,
    name: "Last Verification With Coloring",
    href: "#",
    price: "",
    description: "Eight",
    imageSrc: "/images/geo73.jpeg",
    imageAlt:
      "Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.",
  },
  {
    id: 9,
    name: "Inside design",
    href: "#",
    price: "",
    description: "Nine",
    imageSrc: "/images/geo69.jpeg",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function RealEstate() {
  return (
    <>
      <NextSeo
        title="Real Estate - Site Plans, Inside Plans, and More"
        description="Explore our range of real estate plans including site plans, inside plans, and more. Perfect for all your real estate needs."
        canonical="https://www.geoequipcam.com/realestate"
        openGraph={{
          url: 'https://www.geoequipcam.com/realestate',
          title: 'Real Estate - Site Plans, Inside Plans, and More',
          description: 'Explore our range of real estate plans including site plans, inside plans, and more. Perfect for all your real estate needs.',
          images: [
            {
              url: '/images/geo76.jpeg',
              width: 800,
              height: 600,
              alt: 'Person using a pen to cross a task off a productivity paper card.',
            },
            {
              url: '/images/geo67.jpeg',
              width: 800,
              height: 600,
              alt: 'Paper card sitting upright in walnut card holder on desk.',
            },
          ],
          site_name: 'Real Estate',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'real estate, site plans, inside plans, property, residential, commercial, industrial',
          },
          {
            name: 'Mr AYONGABA Francios AGWENAM',
            content: 'Geo-Consultancy Real Estate',
          },
        ]}
      />
      <div className="bg-gray-50 dark:bg-gray-900">
  <div>
    <main>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            REAL ESTATE
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-900 dark:text-gray-300">
            <strong className="dark:text-white">TYPES OF PROPERTIES</strong>
            <br />
            <strong className="dark:text-white">RESIDENTIAL:</strong> The residential real estate market includes apartments, houses, villas, and townhouses. Popular cities for residential properties.
            <br />
            <strong className="dark:text-white">COMMERCIAL:</strong> Offices, malls, and retail spaces are concentrated in urban areas, particularly Douala and Yaoundé, which are the country’s economic and administrative capitals.
            <br />
            <strong className="dark:text-white">INDUSTRIAL:</strong> Warehouses, factories, and logistics centers are part of the growing industrial real estate market, especially with infrastructure development in major cities.
            <br />
            <strong className="dark:text-white">LAND:</strong> Buying land for future development is common, with both urban and rural plots available.
          </p>

          <div className="mb-4">
            <p className="font-bold text-gray-900 dark:text-white">CHALLENGES WE SOLVE</p>
            <p className="text-gray-900 dark:text-gray-300">
              Geo-Equipment can streamline the land acquisition process by conducting thorough due diligence, legal checks, and navigating the bureaucracy.
            </p>
            <ul className="list-disc text-left pl-8 text-gray-900 dark:text-gray-300">
              <li>We help buyers avoid disputed land or fraudulent transactions.</li>
              <li>We manage property development projects from start to finish.</li>
              <li>We handle architectural designs, construction, project management, and even financing.</li>
              <li>We solve land disputes problems, especially in areas where traditional land tenure systems are strong, requiring careful due diligence before purchasing.</li>
              <li>We give you the opportunity to pay by installment.</li>
              <li>
                We offer property management services such as taking care of day-to-day management, rent collection, repairs, tenant screening, and maintenance, ensuring the property is well-maintained and profitable.
              </li>
              <li>
                We offer consultancy services and investment advice, helping clients identify lucrative areas for investment, such as emerging neighborhoods, commercial hotspots, or land that is likely to appreciate in value.
              </li>
              <li>We ensure that all legal aspects of buying, selling, or renting property are properly handled, reducing the risk of legal disputes and negotiating property contracts.</li>
              <li>
                We have marketing expertise and can help sellers reach potential buyers through advertising, online platforms, and property exhibitions.
              </li>
              <li>We offer pricing strategies to help clients sell their properties quickly and at the best price.</li>
              <li>We help mitigate these risks by offering insurance options, property evaluations, and risk management strategies.</li>
              <li>We ensure that clients are informed about market trends and potential challenges.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-gray-900 dark:text-white">
              In conclusion, GEO-EQUIPMENT CONSULTANT provides comprehensive solutions to a range of challenges, including housing shortages, land disputes, legal complications, property management, and investment risks.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <section aria-labelledby="products-heading" className="mt-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products1.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <Image
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={512}
                    height={1}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 dark:text-white">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* More products */}
        <section aria-labelledby="more-products-heading" className="mt-16 pb-24">
          <h2 id="more-products-heading" className="sr-only">
            More products
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products2.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <Image
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={512}
                    height={1}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 dark:text-white">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  </div>
</div>


    </>
  );
}
