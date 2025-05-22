import HeaderView from "./components/views/HeaderView";
import HeroSectionView from "./components/views/HeroSectionView";
import AboutSectionView from "./components/views/AboutSectionView";
import PassionSectionView from "./components/views/PassionSectionView";
import BackgroundSectionView from "./components/views/BackgroundSectionView";
import SkillsSectionView from "./components/views/SkillsSectionView";
import ProjectsSectionView from "./components/views/ProjectsSectionView";
import CertificateSectionView from "./components/views/CertificateSectionView";
import FooterView from "./components/views/FooterView";

function App() {
  return (
    <>
      <HeaderView />
      <HeroSectionView />
      <AboutSectionView />
      <PassionSectionView />
      <BackgroundSectionView />
      <SkillsSectionView />
      <ProjectsSectionView />
      <CertificateSectionView />
      <FooterView />
    </>
  )
}

export default App
