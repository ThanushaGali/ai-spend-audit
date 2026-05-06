type AuditInput = {
  tool: string;
  plan: string;
  spend: number;
  seats: number;
};

export function generateAudit(data: AuditInput) {
  let recommendation = "";
  let savings = 0;
  let reason = "";

  if (
    data.tool === "ChatGPT" &&
    data.plan.toLowerCase().includes("team") &&
    data.seats <= 2
  ) {
    recommendation = "Switch to ChatGPT Plus";
    savings = data.spend - 20 * data.seats;
    reason =
      "Small teams often overpay for collaborative plans they rarely use.";
  }

  else if (
    data.tool === "Cursor" &&
    data.seats <= 3
  ) {
    recommendation = "Use Cursor Pro instead of Business";
    savings = data.spend - 20 * data.seats;
    reason =
      "Cursor Business pricing is usually unnecessary for small engineering teams.";
  }

  else {
    recommendation = "Current setup looks optimized";
    savings = 0;
    reason =
      "No major savings opportunities were identified based on current usage.";
  }

  return {
    recommendation,
    savings,
    reason,
  };
}