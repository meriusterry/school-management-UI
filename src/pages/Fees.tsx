const fees = [
  { student: "John Doe", amount: 200, status: "Paid" },
  { student: "Jane Smith", amount: 200, status: "Pending" },
];

export default function Fees() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Fees</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Student</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((f, i) => (
            <tr key={i}>
              <td>{f.student}</td>
              <td>${f.amount}</td>
              <td>{f.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
