const attendance = [
  { student: "John Doe", date: "2025-12-01", status: "Present" },
  { student: "Jane Smith", date: "2025-12-01", status: "Absent" },
];

export default function Attendance() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Attendance</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((a, i) => (
            <tr key={i}>
              <td>{a.student}</td>
              <td>{a.date}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
