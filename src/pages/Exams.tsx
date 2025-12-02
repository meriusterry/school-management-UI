const exams = [
  { name: "Math Test", date: "2025-12-05" },
  { name: "English Exam", date: "2025-12-10" },
];

export default function Exams() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Exams</h1>
      <div className="flex gap-4 flex-wrap">
        {exams.map((e, i) => (
          <div className="card w-64" key={i}>
            <h2 className="font-bold text-lg">{e.name}</h2>
            <p>Date: {e.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
