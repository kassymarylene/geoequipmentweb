import { NextSeo } from "next-seo";
import Image, { StaticImageData } from "next/image";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const products1 = [
  {
    id: 1,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/images/geo76.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/images/geo67.jpeg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/images/geo74.jpeg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
  {
    id: 4,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/images/geo19.jpeg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 5,
    name: "",
    href: "*",
    price: "",
    description: "",
    imageSrc: "/images/geo63.jpeg",
    imageAlt: "",
  },
  {
    id: 6,
    name: "",
    href: "*",
    price: "",
    description: "",
    imageSrc: "/images/geo72.jpeg",
    imageAlt: "",
  },
  // More products...
];
const products2 = [
  {
    id: 7,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/images/geo70.jpeg",
    imageAlt: "",
  },
  {
    id: 8,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/images/geo73.jpeg",
    imageAlt: "",
  },
  {
    id: 9,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/images/geo69.jpeg",
    imageAlt: "",
  },
  // More products...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Studies() {
  return (
    <>
    <NextSeo
        title="Studies and Surveys for Construction Projects"
        description="Expert studies and surveys including geotechnical surveys, environmental impact assessments, foundation analysis, and more to ensure safe and efficient construction."
        canonical="https://www.geoequipcam.com/studies"
        openGraph={{
          url: 'https://www.geoequipcam.com/studies',
          title: 'Studies and Surveys for Construction Projects',
          description:
            'Expert studies and surveys including geotechnical surveys, environmental impact assessments, foundation analysis, and more to ensure safe and efficient construction.',
          images: [
            {
              url: 'https://www.geoequipcam.com/images/geo76.jpeg',
              width: 800,
              height: 600,
              alt: 'Geotechnical Survey in Progress',
            },
            {
              url: 'https://www.geoequipcam.com/images/geo67.jpeg',
              width: 800,
              height: 600,
              alt: 'Environmental Impact Assessment Team',
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
                STUDIES
              </h1>
              <div className="mx-auto mt-4 max-w-3xl text-base text-gray-900">
                <p className="mb-4">
                  We studie the lands to ensure the stability and safety of
                  structures like buildings, bridges, dams, and tunnels.
                </p>

                <p className="font-bold"> Key Areas of Study:</p>
                <div className="mb-4">
                  <p className="font-bold">Soil Mechanics:</p>
                  <p>
                    Understanding the properties and behavior of soil, including
                    its strength, compressibility, and permeability.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Rock Mechanics:</p>
                  <p>
                    Study of the properties and behavior of rock masses,
                    essential for tunneling and mining operations.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Foundation Engineering:</p>
                  <p>
                    Design and analysis of foundations for various structures,
                    including shallow and deep foundations.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Slope Stability:</p>
                  <p>
                    Analysis and stabilization of natural and artificial slopes
                    to prevent landslides and erosion.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Earthquake Engineering:</p>
                  <p>
                    Designing structures to withstand seismic activities and
                    understanding soil-structure interaction during earthquakes.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-bold">Ground Improvement:</p>
                  <p>
                    Techniques to enhance the properties of soil, such as
                    compaction, grouting, and soil stabilization.
                  </p>
                </div>
                <p>
                  REAL ESTATE transactions involve various professionals,
                  including real estate agents, appraisers, inspectors, and
                  lawyers, and the market is influenced by economic factors,
                  location, and supply and demand dynamics.
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
