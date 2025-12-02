import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PageWrapper from "./components/PageWrapper";

// Pages
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";
import Subjects from "./pages/Subjects";
import Attendance from "./pages/Attendance";
import Exams from "./pages/Exams";
import Fees from "./pages/Fees";
import Settings from "./pages/Settings";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Topbar */}
        <Topbar />

        {/* Page content */}
        <PageWrapper>
          <div className="p-6 bg-gray-100 min-h-[calc(100vh-4rem)]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </PageWrapper>
      </div>
    </div>
  );
}
