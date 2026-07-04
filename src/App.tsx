import { NoiseOverlay } from './components/NoiseOverlay';
import { DotMatrixBackground } from './components/DotMatrixBackground';
import { Header } from './components/Header';
import { SectionBlend } from './components/SectionBlend';
import { HeroSection } from './sections/HeroSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { WorksSection } from './sections/WorksSection';
import { TechMarqueeSection } from './sections/TechMarqueeSection';
import { FooterSection } from './sections/FooterSection';

/**
 * App — Root layout.
 * Order: DotMatrix → NoiseOverlay → Header → <main> → ... → Footer
 */
export default function App() {
  return (
    <>
      <DotMatrixBackground />
      <NoiseOverlay />
      <Header />
      <main>
        <HeroSection />
        <SectionBlend />
        <SolutionsSection />
        <WorksSection />
        <TechMarqueeSection />
      </main>
      <FooterSection />
    </>
  );
}
