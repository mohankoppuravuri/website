import DreamUniversity from "../islands/DreamUniversity.tsx";
import HomeScreen from "../components/HomeScreen.tsx";
import Navbar from "../components/Navbar.tsx";
import Services from "../components/Services.tsx";
import { WebinarSection } from "../components/WebinarSection.tsx";
import { OurStudentsLoveUs } from "../islands/OurStudentsLoveUs.tsx";
import { LatestUpdates } from "../components/LatestUpdates.tsx";

export default function Home() {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <HomeScreen />
      <Services />
      <DreamUniversity />
      <WebinarSection />
      <OurStudentsLoveUs />
      <LatestUpdates />
    </div>
  );
}
