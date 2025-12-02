const classes = [
  { id: 1, name: "Grade 9" },
  { id: 2, name: "Grade 10" },
  { id: 3, name: "Grade 11" },
];

export default function Classes() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Classes</h1>
      <div className="flex gap-8 flex-wrap">
        {classes.map((c) => (
          <div className="card w-48" key={c.id}>
            <h2 className="font-bold text-lg">{c.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
