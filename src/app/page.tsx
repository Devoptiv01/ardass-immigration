import AvailableCountries from "@/components/main/AvailableCountries";
import CalendlyPopupButton from "@/components/main/CalendlyPopupButton";
import HeroSection from "@/components/main/HeroSection";
import SuccessStories from "@/components/main/SuccessStories";
import VisaCategories from "@/components/main/VisaCategories";
import WhyChooseUs from "@/components/main/WhyChooseUs";

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <WhyChooseUs/>
    <VisaCategories/>
    <AvailableCountries/>
    <SuccessStories/>
    <div className="w-full flex justify-center items-center pb-5">
      <CalendlyPopupButton classes='w-[150px] lg:w-[300px] rounded-2xl py-3 text-xl animate-bounce hover:scale-110'/>
    </div>
  </div>
  );
}
