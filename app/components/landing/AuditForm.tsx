"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "../../lib/auditEngine";

export default function AuditForm() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      setTool(parsedData.tool || "");
      setPlan(parsedData.plan || "");
      setSpend(parsedData.spend || "");
      setSeats(parsedData.seats || "");
    }
  }, []);

  useEffect(() => {
    const formData = {
      tool,
      plan,
      spend,
      seats,
    };

    localStorage.setItem(
      "audit-form",
      JSON.stringify(formData)
    );
  }, [tool, plan, spend, seats]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const auditData = {
      tool,
      plan,
      spend,
      seats,
    };

const result = generateAudit({
  tool,
  plan,
  spend: Number(spend),
  seats: Number(seats),
});

alert(`
Recommendation: ${result.recommendation}

Potential Savings: $${result.savings}/month

Reason:
${result.reason}
`);
  };

  return (
    <section className="mt-32">
      <div className="max-w-3xl border border-white/10 bg-white/5 rounded-3xl p-8">
        <h2 className="text-4xl font-bold mb-8">
          Start Your AI Spend Audit
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              AI Tool
            </label>

            <select
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3"
            >
              <option value="">Select Tool</option>
              <option value="ChatGPT">ChatGPT</option>
              <option value="Claude">Claude</option>
              <option value="Cursor">Cursor</option>
              <option value="Gemini">Gemini</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Current Plan
            </label>

            <input
              type="text"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              placeholder="Ex: Team Plan"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              placeholder="200"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Number of Seats
            </label>

            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              placeholder="5"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Generate Audit
          </button>
        </form>
      </div>
    </section>
  );
}