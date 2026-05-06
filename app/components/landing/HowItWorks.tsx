const steps = [
  {
    title: "Enter Your AI Stack",
    description:
      "Add the AI tools, plans, and monthly spend your team currently uses.",
  },
  {
    title: "Get Instant Audit",
    description:
      "Our audit engine identifies unnecessary spending and optimization opportunities.",
  },
  {
    title: "Reduce Costs",
    description:
      "Switch to smarter plans, remove overlap, and capture infrastructure savings.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-32">
      <h2 className="text-4xl font-bold mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="border border-white/10 rounded-2xl p-6 bg-white/5"
          >
            <p className="text-sm text-gray-500 mb-4">
              Step {index + 1}
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              {step.title}
            </h3>

            <p className="text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}