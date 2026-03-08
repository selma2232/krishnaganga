import Hero from "../components/Hero";
import MidSection from "../components/MidSection";
import Rejuvenate from "../components/Rejuvenate";
import PageContainer from "../components/PageContainer";
export default function HomePage() {
  return (
    <>
      <Hero />
      <MidSection />
      <Rejuvenate videoUrl="https://youtu.be/CcS1cLB3eTw" />
    </>
  );
}
