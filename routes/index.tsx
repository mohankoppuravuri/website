import HomeScreen from "../components/HomeScreen.tsx";
import Navbar from "../components/Navbar.tsx";

export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <HomeScreen />
    </div>
  );
}
