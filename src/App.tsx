import { UserProfileCard } from "@/components/users/user";
import FallbackPage from "@/core/service/error";
import { Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from "@/components/welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/user" element={<UserProfileCard />} />
      <Route path="/fallback" element={<FallbackPage />} />
    </Routes>
  );
}

export default App;
