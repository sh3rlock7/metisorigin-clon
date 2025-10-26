
export const WorkWithMetisCards = () => {
  return (
    <div>
        <div className="text-green-700 flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between mb-10 mt-10 lg:px-24 px-5 gap-y-10 gap-x-10">
          {/* Card 1 */}
          <div className="w-full md:w-[65%] lg:w-[25%]  flex flex-col justify-start text-left sm:border-r md:border-gray-500 md:border-none">
            <h1 className="text-black text-2xl font-black mt-4 px-2 lg:px-0">
             Partnerschaften
            </h1>
            <p className="text-lg lg:text-sm text-gray-500 mt-2 px-2 lg:px-0 text-left">
              Interessieren Sie sich für eine Partnerschaft mit uns? Kontaktieren Sie uns, um mehr über Kooperationsmöglichkeiten und gemeinsame Projekte zu erfahren.
            </p>
            <a className="text-xl underline text-black  mt-2" href="mailto:partnership@metisorigins.com">partnership@metisorigins.com</a>
          </div>

          {/* Desktop Divider */}
          <div className="hidden lg:block w-px bg-gray-500"></div>

          {/* Card 2 */}
          <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col justify-start text-left">
            <div className="lg:hidden h-px bg-gray-300 w-[75%] mb-2 transition-colors duration-300 group-hover:bg-gray-500" />
            <h1 className="text-black text-2xl font-black mt-4">Presseanfragen</h1>
            <p className="text-xl lg:text-sm text-gray-500  py-2">
             Für Medienanfragen und Pressemitteilungen stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns für Interviews und weitere Informationen.
            </p>
            <a className="text-xl underline text-black  mt-2" href="mailto:press@metisorigins.com">press@metisorigins.com</a>
          </div>

          {/* Desktop Divider */}
          <div className="hidden lg:block w-px bg-gray-300"></div>

          {/* Card 3 */}
          <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col justify-start text-left sm:border-r sm:border-gray-500 md:border-none">
            <div className="lg:hidden h-px bg-gray-300 w-[75%] mb-2 transition-colors duration-300 group-hover:bg-gray-500" />
            <h1 className="text-black text-2xl font-black mt-4 lg:px-0">
              Karrierechancen
            </h1>
            <p className="text-xl lg:text-sm text-gray-500 mt-2">
             Werden Sie Teil unseres Teams! Informieren Sie sich über offene Stellen und wie Sie Ihre Karriere in unserem Unternehmen vorantreiben können.
            </p>
            <a className="text-xl underline text-black mt-2" href="mailto:career@metisorigins.com">career@metisorigins.com</a>

          </div>
        </div>    
    </div>
  )
}


