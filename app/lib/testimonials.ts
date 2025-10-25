export interface Testimonial {
  id?: number;
  name: string;
  role: string;
  url: string;
  comment: string;
  avatar: string;
}


export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sedrix L.",
        role: "Privatperson",
        url: "https://www.google.com/maps/reviews/@48.685769,10.1576526,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURSai1tanBBRRAB!2m1!1s0x0:0x54931476df0a2f9e!5m1!1e4?hl=de&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
        comment: "Ich kann diese Firma bzw. dieses Unternehmen nur Empfehlen. Die Website ist zwar schon seit einigen Monaten im Aufbau, aber hat durch Social Media viel Aufmerksamkeit bekommen, darunter auch meine. Absolut zu empfehlen und Preise sind auch Fair. Auf eine weiterhin gute zusammenarbeit. Danke!",
        avatar: "/testimonials-8.jpg"
    }
]