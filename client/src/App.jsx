import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Map from "./components/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
