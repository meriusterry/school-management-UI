const teachers = [
  { id: 1, name: "Mrs. Thompson", subject: "Math" },
  { id: 2, name: "Mr. Johnson", subject: "English" },
];

export default function Teachers() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Teachers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
