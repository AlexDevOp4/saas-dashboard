import Navbar from "../components/Navbar";
import ProtectedRoute from "../components/ProtectedRoute";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to your Dashboard!</h1>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
