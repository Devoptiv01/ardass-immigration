import AvailableCountries from "@/components/main/AvailableCountries";
import CalendlyPopupButton from "@/components/main/CalendlyPopupButton";
import HeroSection from "@/components/main/HeroSection";
import SuccessStories from "@/components/main/SuccessStories";
import VisaCategories from "@/components/main/VisaCategories";
import WhyChooseUs from "@/components/main/WhyChooseUs";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";


const stories = [
  {
    quote:
      "I was frustrated by endless IRCC delays and unclear documentation requests. Ardaas Immigration helped me build a strong case and my Spousal PR was approved in just 9 months!",
    name: "Gurpreet",
    designation: "Spousal PR Approved",
    src: "/images/two-us-passports.avif",
  },
  {
    quote:
      "From selecting the right course to applying for PGWP and PR, Ardaas was with me every step of the way. I now work full-time in Toronto and hold Canadian PR.",
    name: "Jasleen",
    designation: "Study Visa to PR Pathway",
    src: "/images/two-us-passports.avif",
  },
  {
    quote:
      "I had a job offer but no clue how to proceed. The team not only guided me but also helped my employer with LMIA. Got my work permit in 6 weeks!",
    name: "Armaan",
    designation: "LMIA & Work Permit",
    src: "/images/two-us-passports.avif",
  },
  {
    quote:
      "I needed my parents in Canada for my wedding. Ardaas handled everything – financials, insurance, the whole Super Visa process. Approved in under 20 days!",
    name: "Kiran",
    designation: "Super Visa for Parents",
    src: "/images/two-us-passports.avif",
  },
  {
    quote:
      "I was stuck in Express Entry until Ardaas guided me through the OINP Employer Job Offer stream. The process was smooth, and I finally got nominated!",
    name: "Manpreet",
    designation: "PNP via OINP Success",
    src: "/images/two-us-passports.avif",
  },
  {
    quote:
      "I came back to Ardaas for my Canadian citizenship after they helped me get PR. Their preparation and support made the process stress-free!",
    name: "Amandeep",
    designation: "Now a Canadian Citizen",
    src: "/images/two-us-passports.avif",
  },
];



export default function Home() {
  return (
  <div>
    <HeroSection/>
    <WhyChooseUs/>
    <VisaCategories/>
    <AvailableCountries/>
    {/* <AnimatedTestimonials testimonials={stories} /> */}
    <SuccessStories/>
    <div className="w-full flex justify-center items-center pb-5">
      <CalendlyPopupButton classes='w-[150px] lg:w-[300px] rounded-2xl py-3 text-xl animate-bounce hover:scale-110'/>
    </div>
  </div>
  );
}
