import Navbar from "./components/layout/Navbar";
import SavingsCards from "./components/landing/SavingsCards";
import HowItWorks from "./components/landing/HowItWorks";
import AuditForm from "./components/landing/AuditForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm text-gray-400 mb-4">
            AI Spend Optimization Platform
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Stop Overpaying for AI Tools
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Analyze your AI stack, identify unnecessary spending,
            and discover smarter pricing options in minutes.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Audit My AI Spend
          </button>
</div>

<SavingsCards />

<HowItWorks />

<AuditForm />

</section>
    </main>
  );
}