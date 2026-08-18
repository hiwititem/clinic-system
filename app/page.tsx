import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Doctors from "./components/home/Doctors";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Articles from "./components/home/Articles";
import AppointmentCTA from "./components/home/AppointmentCTA";

export default function Home() {
  return (
    <main>
      <Hero />

      <Services />

      <Doctors />

      <WhyChooseUs />

      <Articles />

      <AppointmentCTA />
    </main>
  );
}