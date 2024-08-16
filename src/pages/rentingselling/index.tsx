import { NextSeo } from "next-seo";
import Image, { StaticImageData } from "next/image";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const products1 = [
  {
    id: 1,
    name: "BullDozer",
    href: "#",
    price: "100.000FCFA/h",
    description: "500.000FCFA/6d",
    imageSrc: "/images/geo31.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "BullDozer",
    href: "#",
    price: "100.000FCFA/h",
    description: "500.000FCFA/6d",
    imageSrc: "/images/geo48.jpeg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Frond Wild Holder",
    href: "#",
    price: "75000FCFA/h",
    description: "",
    imageSrc: "/images/geo50.jpeg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
];
const products2 = [
  {
    id: 14,
    name: "Frond Wild Holder",
    href: "#",
    price: "75000FCFA/h",
    description: "",
    imageSrc: "/images/geo36.jpeg",
    imageAlt:
      "Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.",
  },
  {
    id: 15,
    name: "Compactor and Grader",
    href: "#",
    price: "75000FCFA/h",
    description: "",
    imageSrc: "/images/geo61.jpeg",
    imageAlt:
      "Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.",
  },
  {
    id: 16,
    name: "Compactor and Grader",
    href: "#",
    price: "75000FCFA/h",
    description: "",
    imageSrc: "/images/geo62.jpeg",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function RentingSelling() {
  return (
    <>
    <NextSeo
        title="Renting and Selling of Public Work Equipment"
        description="Explore our comprehensive range of public work equipment available for rent or purchase. From bulldozers to compactors, we offer high-quality machinery for your construction needs."
        canonical="https://www.geoequipcam.com/rentingselling"
        openGraph={{
          url: 'https://www.geoequipcam.com/rentingselling',
          title: 'Renting and Selling of Public Work Equipment',
          description:
            'Explore our comprehensive range of public work equipment available for rent or purchase. From bulldozers to compactors, we offer high-quality machinery for your construction needs.',
          images: [
            {
              url: 'https://www.geoequipcam.com/images/geo31.jpeg',
              width: 800,
              height: 600,
              alt: 'BullDozer',
            },
            {
              url: 'https://www.geoequipcam.com/images/geo48.jpeg',
              width: 800,
              height: 600,
              alt: 'BullDozer',
            },
            // More images...
          ],
          site_name: 'geoequipcam',
        }}
      />
    <div className="bg-gray-50">
      <div>
        <main>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                RENTING AND SELLING OF PUBLIC WORK EQUIPMENT
              </h1>
              <div className="mx-auto mt-4 max-w-3xl text-base text-gray-900">
                <p className="mb-4">
                  Renting and selling of public work equipment involves the
                  business of providing construction and heavy equipment for
                  temporary use or permanent acquisition by clients in various
                  industries.
                </p>
                <div className="mb-4">
                  <p className="font-bold">RENTING</p>
                  <p>
                    Companies rent out equipment such as excavators, bulldozers,
                    cranes, and trucks to construction firms, municipalities,
                    and other entities for specified periods. This allows
                    clients to use expensive machinery without the high upfront
                    costs of ownership. Rental terms can vary from short-term to
                    long-term leases.
                  </p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">SELLING</p>
                  <p>
                    Businesses also sell equipment to customers who prefer to
                    own rather than rent. This involves new or used equipment
                    transactions, often including maintenance agreements,
                    warranties, and financing options.
                  </p>
                </div>

                <p className="font-bold">KEY ASPECTS:</p>

                <div className="mb-4">
                  <p className="font-bold">Equipment Range</p>
                  <p>
                    BIncludes heavy machinery, construction tools, and
                    specialized vehicles
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Customer Base</p>
                  <p>
                    Contractors, builders, municipalities, and other public and
                    private entities.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Logistics</p>
                  <p>
                    Transport, setup, and maintenance services may be included
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Financial Considerations</p>
                  <p>
                    Rental rates, purchase prices, financing options, and resale
                    values are factors.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Partnership</p>
                  <p>
                    We partner with companies who provide construction
                    equipments irrespective of the quantities with possibility
                    of short or long term payment
                  </p>
                </div>
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
