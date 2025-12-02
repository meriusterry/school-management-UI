const subjects = ["Math", "English", "Science", "History", "Geography"];

export default function Subjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Subjects</h1>
      <div className="flex gap-4 flex-wrap">
        {subjects.map((s, i) => (
          <div className="card w-48" key={i}>
            <h2 className="font-bold text-lg">{s}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
