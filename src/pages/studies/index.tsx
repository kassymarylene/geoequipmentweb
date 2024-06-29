
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']


const products1 = [
  {
    id: 1,
    name: '',
    href: '#',
    price: '',
    description: '',
    imageSrc: '/images/geo76.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: '',
    href: '#',
    price: '',
    description: '',
    imageSrc: '/images/geo67.jpeg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: '',
    href: '#',
    price: '',
    description: '',
    imageSrc: '/images/geo74.jpeg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  // More products...
  {
    id: 3,
    name: '',
    href: '#',
    price: '',
    description: '',
    imageSrc: '/images/geo19.jpeg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 9,
    name: '',
    href: '*',
    price: '',
    description: '',
    imageSrc: '/images/geo63.jpeg',
    imageAlt:
      '',
    },
    {
      id: 9,
      name: '',
      href: '*',
      price: '',
      description: '',
      imageSrc: '/images/geo72.jpeg',
      imageAlt:
        '',
      },
  // More products...
]
const products2 = [
  {
    id: 7,
    name: '',
    href: '#',
    price: '',
    description: '',
    imageSrc: '/images/geo70.jpeg',
    imageAlt: '',
  },
  {
    id: 8,
    name: '',
    href: '#',
    price: '',
    description: '',
    imageSrc: '/images/geo73.jpeg',
    imageAlt:
      '',
  },
  {
    id: 9,
    name: '',
    href: '#',
    price: '',
    description: '',
    imageSrc: '/images/geo69.jpeg',
    imageAlt: '',
  },
      // More products...
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Studies() {



  return (
    <div className="bg-gray-50">
     

      <div>
       
        <main>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">STUDIES</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-900">
              <p className="mb-4">
                We studie the lands to ensure the stability and safety of structures like buildings, bridges, dams, and tunnels.</p>
              
                <p className="font-bold"> Key Areas of Study:</p> 
    <div className="mb-4">
        <p className="font-bold">Soil Mechanics:</p>
        <p>Understanding the properties and behavior of soil, including its strength, compressibility, and permeability.</p>
    </div>

    <div className="mb-4">
        <p className="font-bold">Rock Mechanics:</p>
        <p>Study of the properties and behavior of rock masses, essential for tunneling and mining operations.
        </p>
    </div>

    <div className="mb-4">
        <p className="font-bold">Foundation Engineering:</p>
        <p>Design and analysis of foundations for various structures, including shallow and deep foundations.</p>
    </div>

    <div className="mb-4">
        <p className="font-bold">Slope Stability:</p>
        <p>Analysis and stabilization of natural and artificial slopes to prevent landslides and erosion.
        </p>
    </div>

    <div className="mb-4">
        <p className="font-bold">Earthquake Engineering:</p>
        <p>Designing structures to withstand seismic activities and understanding soil-structure interaction during earthquakes.
        </p>
    </div>

    <div className="mb-4">
        <p className="font-bold">Ground Improvement:</p>
        <p>Techniques to enhance the properties of soil, such as compaction, grouting, and soil stabilization.
        </p>
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
