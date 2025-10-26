import Link from "next/link"

export const Office = () => {
  return (
    <div className="text-center mt-24">
        <h3 className="text-2xl">Komm gerne vorbei</h3>
        <h1 className="text-5xl mt-5 lg:text-8xl font-bold mb-5">Treffe uns Vorort</h1>
        <div className="bg-black  h-[450px] w-[90%] lg:w-[80%] mx-auto mb-10 rounded-4xl p-5">
            <div className="bg-[#c1aa8b] h-full lg:w-[45%] rounded-4xl flex flex-col gap-y-8" >
                <h1 className="text-3xl lg:text-5xl text-white text-wrap mt-2 font-semibold">
                    Unsere Hauptniederlassung
                </h1>
                <div className="mt-16 font-medium">
                    <p className="text-xl text-white text-left p-2 ml-4">Hauptniederlassung Deutschland:</p>
                    
                    <div className="text-xl text-white text-left p-2 ml-4">
                        <p>
                            Leibniz-Campus 9, <br />
                            89520 Heidenheim, <br />
                            Deutschland
                        </p>
                        <Link  href={'https://www.google.com/maps/place/metisOrigins/@48.685769,10.1550777,17z/data=!3m1!4b1!4m6!3m5!1s0x4799412ac54ac78b:0x54931476df0a2f9e!8m2!3d48.685769!4d10.1576526!16s%2Fg%2F11t_rs49sd?entry=tts&g_ep=EgoyMDI0MDcyNC4wKgBIAVAD'}>
                            <p className="underline text-xl text-left mt-4 text-black font-bold">Zur Karte</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}


