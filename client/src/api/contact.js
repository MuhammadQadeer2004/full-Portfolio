// Backend se baat karne wala function
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function sendMessage(data) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json.error || "Something went wrong. Please try again.");
  }
  return json;
}


// // Formspree ka link yahan se aata hai (Vercel ke Environment Variables mein VITE_FORM_URL daalo)
// const FORM_URL = import.meta.env.VITE_FORM_URL;

// export async function sendMessage({ name, email, message }) {
//   const res = await fetch(FORM_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json", Accept: "application/json" },
//     body: JSON.stringify({ name, email, message }),
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong. Please try again.");
//   }
//   return res.json();
// }