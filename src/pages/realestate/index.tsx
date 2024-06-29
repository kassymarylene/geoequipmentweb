
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']


const products1 = [
  {
    id: 1,
    name: 'Site Plan',
    href: '#',
    price: '',
    description: 'One',
    imageSrc: '/images/geo76.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'Site Plan with the OutSide',
    href: '#',
    price: '',
    description:'Two',
    imageSrc: '/images/geo67.jpeg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Inside Plan',
    href: '#',
    price: '',
    description: 'three',
    imageSrc: '/images/geo74.jpeg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  // More products...
  {
    id: 3,
    name: 'Card Design',
    href: '#',
    price: '',
    description: 'Four',
    imageSrc: '/images/geo19.jpeg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 9,
    name: 'Handling Of Keys',
    href: '*',
    price: '',
    description: 'Five',
    imageSrc: '/images/geo58.jpeg',
    imageAlt:
      'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
    },
    {
      id: 9,
      name: 'The Inside',
      href: '*',
      price: '',
      description: 'Six',
      imageSrc: '/images/geo59.jpeg',
      imageAlt:
        'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
      },
  // More products...
]
const products2 = [
  {
    id: 7,
    name: 'The Inside Plan',
    href: '#',
    price: '',
    description: 'Seven',
    imageSrc: '/images/geo70.jpeg',
    imageAlt: 'Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.',
  },
  {
    id: 8,
    name: 'Last Verification With Coloring',
    href: '#',
    price: '',
    description: 'Eight',
    imageSrc: '/images/geo73.jpeg',
    imageAlt:
      'Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.',
  },
  {
    id: 9,
    name: 'Inside design',
    href: '#',
    price: '',
    description: 'Nine',
    imageSrc: '/images/geo69.jpeg',
    imageAlt:
      'Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.',
  },
      // More products...
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function RealEstate() {



  return (
    <div className="bg-gray-50">
     

      <div>
       
        <main>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">REAL STATE</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-900">
              <p className="mb-4">
        REAL ESTATE refers to property consisting of land and the buildings on it, along with its natural resources such as crops, minerals, or water. It also includes the business of buying, selling, or renting these properties. Key aspects include:
    </p>

    <div className="mb-4">
        <p className="font-bold">RESIDENTIAL REAL ESTATE:</p>
        <p>Properties designed for people to live in, such as houses, apartments, and condominiums.</p>
    </div>

    <div className="mb-4">
        <p className="font-bold">COMMERCIAL REAL ESTATE:</p>
        <p>Properties used for business purposes, such as offices, shops, and hotels.</p>
    </div>

    <div className="mb-4">
        <p className="font-bold">INDUSTRIAL REAL ESTATE:</p>
        <p>Properties used for manufacturing, production, distribution, and storage, such as factories and warehouses.</p>
    </div>

    <div className="mb-4">
        <p className="font-bold">LAND:</p>
        <p>Undeveloped property, agricultural land, and vacant lots.</p>
    </div>

    <p>
        REAL ESTATE transactions involve various professionals, including real estate agents, appraisers, inspectors, and lawyers, and the market is influenced by economic factors, location, and supply and demand dynamics.
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
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
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
            <section aria-labelledby="more-products-heading" className="mt-16 pb-24">
              <h2 id="more-products-heading" className="sr-only">
                More products
              </h2>

              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products2.map((product) => (
                  <a key={product.id} href={product.href} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>

       
      </div>
    </div>
  )
}
