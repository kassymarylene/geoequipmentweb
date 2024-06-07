import { Card } from "flowbite-react";

const Team = () => {

    return (
          <section id="team" className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h1>

                <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
               
                <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/boss_ceo.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        AYONGABA Francios AGWENAM
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>

            </div>
        </div>
    </div>
</section>
    )
    
}

export default Team;