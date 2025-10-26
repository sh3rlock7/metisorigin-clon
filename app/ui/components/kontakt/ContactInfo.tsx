import { Formular } from "./Formular"

const ContactInfo = () => {
  return (
    <div className="bg-black w-[80%]  mb-2 flex flex-col mx-auto text-center rounded-4xl">
        <h4 className="text-gray-500 text-xl mt-18">
          Deine Fragen wurden noch nicht beantwortet?
        </h4>
        <h1 className="text-white text-5xl mt-5 font-bold">
          Support & Kontakt
        </h1>

        <div>
          <div className="flex flex-col lg:flex-row justify-around">
            <div className="w-full lg:w-[60%] mt-10">
                <Formular />
            </div>

            <div>
              <ul className="text-white font-bold bg-[url('/kontakt.jpg')] bg-cover h-auto mb-5 lg:mb-0 lg:h-[1075px] p-5 w-[80%] lg:w-[350px] flex flex-col mx-auto gap-y-6 mt-10">
              <h3 className="text-xl text-white">Öffnungszeiten</h3>
              <div className="block h-px bg-gray-300"></div>
                <div className="flex justify-between">
                  <p>Montag</p>
                  <p>08:00 - 18:00 Uhr</p>
                </div>
                <div className="flex justify-between">
                  <p>Dienstag</p>
                  <p>08:00 - 18:00 Uhr</p>
                </div>
                <div className="flex justify-between">
                  <p>Mittwoch</p>
                  <p>08:00 - 18:00 Uhr</p>
                </div>
                <div className="flex justify-between">
                  <p>Donnerstag</p>
                  <p>08:00 - 18:00 Uhr</p>
                </div>
                <div className="flex justify-between">
                  <p>Freitag</p>
                  <p>08:00 - 14:00 Uhr</p>
                </div>
                <div className="flex justify-between">
                  <p>Samstag</p>
                  <p>geschlossen</p>
                </div>
                <div className="flex justify-between">
                  <p>Sonntag</p>
                  <p>geschlossen</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactInfo
