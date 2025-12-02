export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-6 text-gray-700">
        Welcome to the School Management System! Here is a quick overview.
      </p>

      <div className="flex gap-6 flex-wrap">
        <div className="card w-64">
          <h2 className="font-bold text-lg">Total Students</h2>
          <p className="text-2xl mt-2">120</p>
        </div>

        <div className="card w-64">
          <h2 className="font-bold text-lg">Total Teachers</h2>
          <p className="text-2xl mt-2">15</p>
        </div>

        <div className="card w-64">
          <h2 className="font-bold text-lg">Classes</h2>
          <p className="text-2xl mt-2">8</p>
        </div>

        <div className="card w-64">
          <h2 className="font-bold text-lg">Subjects</h2>
          <p className="text-2xl mt-2">20</p>
        </div>
      </div>
    </div>
  );
}
