// // Backend se baat karne wala function
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// export async function sendMessage(data) {
//   const res = await fetch(`${API_URL}/api/contact`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });

//   const json = await res.json().catch(() => ({}));
//   if (!res.ok) {
//     throw new Error(json.error || "Something went wrong. Please try again.");
//   }
//   return json;
// }


/// Formspree ka link .env (aur Vercel ke Environment Variables) se VITE_FORM_URL naam se aata hai
const FORM_URL = import.meta.env.VITE_FORM_URL;

export async function sendMessage({ name, email, message, website }) {
  // Honeypot: bots yeh chhupa hua dabba bhar dete hain, unko chup chaap "success" dikha do
  if (website) return { ok: true };

  const res = await fetch(FORM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    throw new Error("Something went wrong. Please try again.");
  }
  return res.json();
}