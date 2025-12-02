export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <p className="mb-4">Configure your School Management System options here.</p>

      <div className="card w-full max-w-lg">
        <label className="block mb-2 font-medium">School Name</label>
        <input
          type="text"
          placeholder="Enter school name"
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2 font-medium">Admin Email</label>
        <input
          type="email"
          placeholder="Enter admin email"
          className="w-full p-2 border rounded mb-4"
        />

        <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          Save
        </button>
      </div>
    </div>
  );
}
