// frontend.js

export async function fetchApiData(endpoint) {
  const res = await fetch(`/api/tmdb?endpoint=${endpoint}`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
}

export async function searchApiData({ type, term, page }) {
  const res = await fetch(`/api/tmdb?type=${type}&term=${term}&page=${page}`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
}
