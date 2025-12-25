const APP_ID = "3096676660721369";
const REDIRECT_URI = "http://localhost:5500/";
const GRAPH_BASE = "https://graph.facebook.com/v19.0";

const loginBtn = document.getElementById("loginBtn");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");

loginBtn.addEventListener("click", () => {
  const authURL =
    `https://www.facebook.com/v19.0/dialog/oauth` +
    `?client_id=${APP_ID}` +
    `&redirect_uri=${REDIRECT_URI}` +
    `&response_type=token` +
    `&scope=public_profile`;

  window.location.href = authURL;
});

// Extract token from URL
function getAccessToken() {
  const hash = window.location.hash;
  if (!hash) return null;
  return new URLSearchParams(hash.substring(1)).get("access_token");
}

async function fetchProfile(token) {
  loading.classList.remove("hidden");

  try {
    const res = await fetch(
      `${GRAPH_BASE}/me?fields=id,name&access_token=${token}`
    );

    if (!res.ok) throw new Error("Unauthorized or expired token");

    const data = await res.json();

    // BASIC PROFILE
    document.getElementById("name").textContent = data.name;
    document.getElementById("userId").textContent = data.id;
    document.getElementById("profilePic").src =
      `${GRAPH_BASE}/${data.id}/picture?type=large&access_token=${token}`;

    document.getElementById("result").classList.remove("hidden");

  } catch (err) {
    errorBox.textContent = err.message;
  } finally {
    loading.classList.add("hidden");
  }
}

// Auto-load if token exists
const token = getAccessToken();
if (token) {
  fetchProfile(token);
}
