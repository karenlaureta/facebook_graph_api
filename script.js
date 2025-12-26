const APP_ID = "YOUR_FACEBOOK_APP_ID"; // Change this with your facebook App ID
const REDIRECT_URI = "http://localhost:5500/";
const GRAPH_BASE = "https://graph.facebook.com/v19.0";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");
const resultCard = document.getElementById("result");
const welcomeSection = document.getElementById("welcomeSection");
const privacyNote = document.getElementById("privacyNote");

function hideLoggedOutUI() {
  welcomeSection.classList.add("hidden");
  privacyNote.classList.add("hidden");
}

function showLoggedOutUI() {
  welcomeSection.classList.remove("hidden");
  privacyNote.classList.remove("hidden");
  loginBtn.classList.remove("hidden");
  resultCard.classList.add("hidden");
}

loginBtn.onclick = () => {
  loginBtn.disabled = true;
  loginBtn.textContent = "Redirecting...";

  window.location.href =
    `https://www.facebook.com/v19.0/dialog/oauth` +
    `?client_id=${APP_ID}` +
    `&redirect_uri=${REDIRECT_URI}` +
    `&response_type=token` +
    `&scope=public_profile`;
};

function getToken() {
  if (!location.hash) return null;
  return new URLSearchParams(location.hash.substring(1)).get("access_token");
}

function fetchProfile(token) {
  loading.classList.remove("hidden");

  fetch(`${GRAPH_BASE}/me?fields=id,name&access_token=${token}`)
    .then(res => {
      if (!res.ok) throw new Error("Session expired");
      return res.json();
    })
    .then(data => {
      document.getElementById("name").textContent = data.name;
      document.getElementById("userId").textContent = data.id;
      document.getElementById("profilePic").src =
  `${GRAPH_BASE}/${data.id}/picture?type=large&access_token=${token}`;

      hideLoggedOutUI();
      loginBtn.classList.add("hidden");
      resultCard.classList.remove("hidden");
      sessionStorage.setItem("fb_token", token);
    })
    .catch(err => {
      errorBox.textContent = err.message;
      sessionStorage.clear();
      showLoggedOutUI();
    })
    .finally(() => loading.classList.add("hidden"));
}

logoutBtn.onclick = () => {
  sessionStorage.clear();
  history.replaceState(null, "", location.pathname);
  location.reload();
};

const token = getToken() || sessionStorage.getItem("fb_token");
if (token) fetchProfile(token);
else showLoggedOutUI();
