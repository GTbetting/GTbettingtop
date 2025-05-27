import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user, isAdmin } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={user ? <HomePage /> : <Navigate to="/" />} />
      <Route path="/admin" element={user && isAdmin ? <AdminDashboardPage /> : <Navigate to="/" />} />
    </Routes>
  );
}