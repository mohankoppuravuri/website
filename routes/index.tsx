import DreamUniversity from "../components/DreamUniversity.tsx";
import HomeScreen from "../components/HomeScreen.tsx";
import Navbar from "../components/Navbar.tsx";
import Services from "../components/Services.tsx";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <HomeScreen />
      <Services />
      <DreamUniversity />
    </div>
  );
}
