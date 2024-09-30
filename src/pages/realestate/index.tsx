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
    <div className="bg-gray-50">
      <div>
        <main>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                REAL STATE
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-900">
                <p className="mb-4">
                TYPES OF PROPERTIES
   RESIDENTIAL: The residential real estate market includes apartments, houses, villas, and townhouses. Popular cities for residential properties.
   COMMERCIAL: Offices, malls, and retail spaces are concentrated in urban areas, particularly Douala and Yaoundé, which are the country’s economic and administrative capitals.
   INDUSTRIAL: Warehouses, factories, and logistics centers are part of the growing industrial real estate market, especially with infrastructure development in major cities.
   LAND: Buying land for future development is common, with both urban and rural plots available.
                </p>

                <div className="mb-4">
                  <p className="font-bold">CHALLENGES WE SOLVE</p>
                  <p>
    Geo-Equiptment can streamline the land acquisition process by conducting thorough due diligence, legal checks, and navigating the bureaucracy. 
    We help buyers avoid disputed land or fraudulent transactions.
    We manage property development projects from start to finish. 
    We handle architectural designs, construction, project management, and even financing.
    We solve land  disputes problems, especially in areas where traditional land tenure systems are strong, requiring careful due diligence before purchasing.
    we give opportunity you the opportunity to pay by installment.
    We offer property management services such as: taking care of day-to-day management, rent collection, repairs, tenant screening, and maintenance, ensuring the property is well-maintained and profitable.
    We offer consultancy services and investment advice, helping clients identify lucrative areas for investment, such as emerging neighborhoods, commercial hotspots, or land that is likely to appreciate in value.
    We ensure that all legal aspects of buying, selling, or renting property are properly handled, reducing the risk of legal disputes and negotiation of property contracts.
    We have marketing expertise and can help sellers reach potential buyers through advertising, online platforms, and property exhibitions. 
    We offer pricing strategies to help clients sell their properties quickly and at the best price.
    We help mitigate these risks by offering insurance options, property evaluations, and risk management strategies. 
    We ensure that clients are informed about market trends and potential challenges.

    </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold"> In conclusion GEO-EQUIPTMENT CONSULTANT provide comprehensive solutions to a range of challenges, including housing shortages, land disputes, legal complications, property management, and investment risks.</p>
                  <p>
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold"></p>
                  <p>
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold"></p>
                  <p>
                  </p>
                </div>

                <p>
                </p>
              </p>
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
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
            {/*
            <section aria-labelledby="featured-heading" className="relative mt-16 overflow-hidden rounded-lg lg:h-96">
              <div className="absolute inset-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
              <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
              <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
                <div>
                  <h2 id="featured-heading" className="text-xl font-bold text-white">
                    Workspace Collection
                  </h2>
                  <p className="mt-1 text-sm text-gray-300">
                    Upgrade your desk with objects that keep you organized and clear-minded.
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                >
                  View the collection
                </a>
              </div>
            </section>
           */}
            <section
              aria-labelledby="more-products-heading"
              className="mt-16 pb-24"
            >
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
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
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
