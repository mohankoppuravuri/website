import DreamUniversity from "../islands/DreamUniversity.tsx";
import HomeScreen from "../components/HomeScreen.tsx";
import Navbar from "../components/Navbar.tsx";
import Services from "../components/Services.tsx";
import { WebinarSection } from "../components/WebinarSection.tsx";

export default function Home() {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      {/* <Navbar /> */}
      <HomeScreen />
      <Services />
      <DreamUniversity />
      <WebinarSection />
    </div>
  );
}
