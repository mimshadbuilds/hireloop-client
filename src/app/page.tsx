import Banner from "@/components/home/hero-banner";
import FeaturesSection from "@/components/home/features-section";
import JobsSection from "@/components/home/jobs-section";
import PricingSection from "@/components/home/pricing-section";
import Footer from "@/components/shared/footer";

export default function Page() {
  return (
    <>
    <Banner />
    <JobsSection />
    <FeaturesSection />
    <PricingSection />
    <Footer />
    </>
  )
}
