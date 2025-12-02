import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Students", path: "/students" },
  { name: "Teachers", path: "/teachers" },
  { name: "Classes", path: "/classes" },
  { name: "Subjects", path: "/subjects" },
  { name: "Attendance", path: "/attendance" },
  { name: "Exams", path: "/exams" },
  { name: "Fees", path: "/fees" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h1>School Admin</h1>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
