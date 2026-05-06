const cards = [
  {
    company: "Seed Startup",
    savings: "$420/mo",
    reason: "Downgraded unused enterprise seats",
  },
  {
    company: "AI Agency",
    savings: "$1,240/mo",
    reason: "Switched from retail API pricing",
  },
  {
    company: "Dev Team",
    savings: "$310/mo",
    reason: "Removed overlapping AI subscriptions",
  },
];

export default function SavingsCards() {
  return (
    <section className="grid md:grid-cols-3 gap-6 mt-20">
      {cards.map((card) => (
        <div
          key={card.company}
          className="border border-white/10 rounded-2xl p-6 bg-white/5"
        >
          <h3 className="text-xl font-semibold mb-2">
            {card.company}
          </h3>

          <p className="text-3xl font-bold mb-4">
            {card.savings}
          </p>

          <p className="text-gray-400">
            {card.reason}
          </p>
        </div>
      ))}
    </section>
  );
}