export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">SpendScope</h1>

        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium">
          Start Audit
        </button>
      </div>
    </nav>
  );
}