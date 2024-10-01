import Image, { StaticImageData } from "next/image";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const products1 = [
  {
    id: 21,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 22,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 23,
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
    id: 27,
    name: "",
    href: "#",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 28,
    name: "",
    href: "*",
    price: "",
    description: "",
    imageSrc: "/",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  {
    id: 29,
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

export default function Contracts() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
  <div>
    <main>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            CONTRACTS
          </h1>
          <div className="mx-auto mt-2 max-w-3xl text-base text-gray-900 dark:text-gray-300">
            <p className="mb-4">
              GEO-EQUIPMENT CONSULTANT signs contracts in respect to the
              country&apos;s law. We partner with several companies. We sell
              and rent equipment irrespective of the quantity for short- and
              long-term payment options.
            </p>

            <div className="mb-4">
              <p className="font-bold text-gray-900 dark:text-white">REAL ESTATE CONTRACT</p>
              <p className="text-gray-900 dark:text-gray-300">
                A real estate contract is a legally binding agreement between two or more parties for the purchase, sale, or lease of real property.
              </p>
            </div>

            <div className="mb-3">
              <p className="font-bold text-gray-900 dark:text-white">Types of Real Estate Contracts:</p>
              <p className="text-gray-900 dark:text-gray-300">
                <br />
                PURCHASE AGREEMENT: Used when a buyer is purchasing a property from a seller.
                <br />
                <br />
                LEASE AGREEMENT: Used for renting property, outlining the terms of the lease.
                <br />
                <br />
                REAL ESTATE OPTION CONTRACT: Gives the buyer the right to purchase a property at a later date.
                <br />
                <br />
                LAND CONTRACT: The buyer makes payments directly to the seller until the property is paid off.
                <br />
              </p>
            </div>

            <div className="mb-4">
              <p className="font-bold text-gray-900 dark:text-white">
                SELLING AND RENTING OF PUBLIC WORK EQUIPMENT CONTRACT
              </p>
              <p className="text-gray-900 dark:text-gray-300">
                A contract for selling and renting public work equipment is an agreement where one party (the lessor) agrees to rent out equipment to another party (the lessee) for a specified period and price.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 dark:text-white">The key elements are:</p>
              <p className="text-gray-900 dark:text-gray-300">
                <br />
                RENTAL FEE AND PAYMENT TERMS: The cost of renting the equipment and the payment schedule.
                <br />
                <br />
                RESPONSIBILITIES: Maintenance and repair responsibilities during the rental period.
                <br />
                <br />
                INSURANCE AND LIABILITIES: Insurance requirements and liability for damages or loss.
                <br />
                <br />
                INSPECTIONS: Both parties should inspect the equipment before and after the rental period.
                <br />
                <br />
                USAGE RESTRICTIONS: Any restrictions on how the equipment can be used.
                <br />
              </p>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <section aria-labelledby="products-heading" className="mt-8">
          <h2 id="products-heading" className="sr-only">Products</h2>

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
