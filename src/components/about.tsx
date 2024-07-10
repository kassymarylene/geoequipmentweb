
export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}: {
  cardTitle1: string, cardTitle2: string, cardTitle3: string,
  cardSubText1: string, cardSubText2: string, cardSubText3: string
}) {
  return (
    <div id="about-container" className="relative p-4 mb-4">
      <div className="flex justify-center items-center">
        <button className="relative mt-24 bg-green-200  hover:bg-green-600 px-4 py-1 rounded-2xl text-green-500 hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Our Story
        </button>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
        <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
           GEO-EQUIPMENT CONSULTANT
          </p>
           <p className="text-center mt-4 dark:text-gray-300">
              Reg: RC.BDA.2014A.179
              <br/>
              TAXPAYER N°: M 0 4 1 4 1 2 4 4 0  2 5 5 R
              <br/>
               B.P 916 Yaounde
               <br/>
               Afriland first Bank  Acc N°: 06489961001
               <br/>
               CCC Bank Acc N°:37211933402
               <br/>
               Ecobank Acc N°: 0222845401
            </p>
        </div>
      </div>
      <div className="relative justify-center items-center">
        <p className="font-medium text-base text-center mt-5  text-whiteText">
        is an Establissement base in Yaounde-Cameroon precisely at entre phamarcam created in 2014 by AYONGABA FRANCOIS AGWENAM<br/> a young business man and public work engineer <br/>who has several activity under his control in which the most recent and popular one is 
        GEO-EQUIPMENT CONSULTANT <br/>a compagny which turn on 20-500 Millions FCFA and covers 17 workers.
       <br/> we make expert available to discuss with you 24h/7 on any of our services you need online and offline. 
       <br/>we are open 24H/7 from 8H30-17H30 except Saturday:8H30-13H30 
       contact us:
       <span className="font-medium text-base text-center mt-1  text-whiteText">
        <br/>CALL: 656169787/680941692/678902625<br/>
        <br/> Whatsapp: 677355166/697204969/+4917659729775/690462359<br/>
        </span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[50px] ml-[28px]">
        <div className="bg-white  py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle1}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText1}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px]  mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle2}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText2}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle3}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText3}
          </p>
        </div>
      </div>
    </div>
  );
}
