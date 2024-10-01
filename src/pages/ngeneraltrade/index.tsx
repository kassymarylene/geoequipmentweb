import Image, { StaticImageData } from "next/image";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const products1 = [
  {
    id: 1,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
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
    imageSrc: "/",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 5,
    name: "",
    href: "*",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  {
    id: 6,
    name: "",
    href: "*",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];
const products2 = [
  {
    id: 17,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.",
  },
  {
    id: 18,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.",
  },
  {
    id: 19,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function NgeneralTrade() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
  <div>
    <main>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            NEGOTIATION AND GENERAL TRADE
          </h1>
          <div className="mx-auto mt-2 max-w-3xl text-base text-gray-900 dark:text-gray-300">
            <p className="mb-4">
              GEO-EQUIOMENT CONSULTANT can negotiate any business for you in
              Cameroon be it with the government or business administrations. We
              also get any goods of your choice for you.
            </p>

            <div className="mb-4">
              <p className="font-bold dark:text-white">REAL ESTATE NEGOTIATION</p>
              <p>
                <br />
                PREPARATION: Research market and property values.
                <br />
                <br />
                REPPORT: Build a positive relationship.
                <br />
                <br />
                COMMUNICATION: Clearly state needs and limits.
                <br />
                <br />
                FLEXIBILITY: Be open to compromise.
                <br />
                <br />
                DUE DILIGENCE: Inspections, appraisals, legal review.
              </p>
            </div>

            <div className="mb-3">
              <p className="font-bold dark:text-white">GENERAL TRADE IN REAL ESTATE</p>
              <p>
                <br />
                TRANSACTION: Buy, sell, lease, rent properties.
                <br />
                <br />
                MANAGEMENT: Oversee maintenance and operations.
                <br />
                <br />
                DEVELOPMENT: Build or renovate properties.
              </p>
            </div>

            <div className="mb-4">
              <p className="font-bold dark:text-white">
                RENTING OF PUBLIC WORK EQUIPMENT NEGOTIATION AND TRADE
              </p>
              <p>
                Negotiation in selling and renting public work equipment involves
                an agreement where one party (the owner) agrees to sell or rent
                out equipment to another party (the lessee) for a specified
                period and price.
              </p>
            </div>

            <div className="mb-4">
              <p className="font-bold dark:text-white">The key elements are:</p>
              <p>
                <br />
                INVENTORY: Track and maintain equipment.
                <br />
                <br />
                PRICING: Set competitive rates.
                <br />
                <br />
                CONTRACT: Clear terms and responsibilities.
                <br />
                <br />
                MARKETING: Online platforms, trade shows.
                <br />
                <br />
                CUSTOMER SERVICE: Provide reliable support.
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

        <section aria-labelledby="more-products-heading" className="mt-16 pb-24">
          <h2 id="more-products-heading" className="sr-only">More products</h2>

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

  );
}
