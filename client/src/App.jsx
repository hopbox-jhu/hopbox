import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Map from "./components/Map";
import SignUpPage from "./components/SignUpSection/SignUpPage";
import SignInPage from "./components/SigninSection/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/map" element={<Map />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
