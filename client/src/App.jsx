import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Map from "./components/Map";
import Signup from "./pages/Landing/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/map" element={<Map />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
