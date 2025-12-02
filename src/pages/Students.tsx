const students = [
  { id: 1, name: "John Doe", class: "Grade 10", email: "john@example.com" },
  { id: 2, name: "Jane Smith", class: "Grade 9", email: "jane@example.com" },
  { id: 3, name: "Michael Brown", class: "Grade 11", email: "michael@example.com" },
];

export default function Students() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-0">Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
