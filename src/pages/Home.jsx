import Hero from "../components/Hero";
import MidSection from "./MidSection";
import Rejuvenate from "./Rejuvenate";
const PageContainer = "../page/PageContainer";
export default function HomePage() {
  return (
    <>
      <Hero />
      <MidSection />
      <Rejuvenate videoUrl="https://youtu.be/CcS1cLB3eTw" />
    </>
  );
}
