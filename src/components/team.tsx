import { Card } from "flowbite-react";

const Team = () => {

    return (
          <section id="team" className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h1>

                <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    We have 17 experts in our team avaible to serve you 24H/7.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
               
                <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/geo23.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Mr AYONGABA Francios AGWENAM
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
         The CEO of GOE-EQUIPMENT CONSULTANT  <br/>a young business man and public work engineer, 
         father of 3 children he lives at ODZA YAOUNDE CAMEROON <br/>and has several activity under his control.
      </p>
    </Card>

            </div>
        </div>
    </div>
</section>
    )
    
}

export default Team;