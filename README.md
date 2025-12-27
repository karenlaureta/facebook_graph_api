# Facebook Graph API Demo

A lightweight, modern web application that demonstrates **Facebook Graph API** integration using **OAuth 2.0** to securely authenticate users and fetch basic public profile information, presented through a clean and interactive user interface.

This project is intended strictly for **educational and demonstration purposes**, illustrating how third-party authentication, API consumption, and frontend state management work in a real-world web scenario.

---

## Overview

The application allows users to log in with their Facebook account and retrieve publicly available profile data such as **name**, **profile picture**, and **Facebook numeric ID**.

Beyond authentication, the project showcases essential frontend features such as **dark mode**, **session persistence**, **copy-to-clipboard interaction**, **loading indicators**, and **graceful error handling** to improve overall user experience.

---

## Features

### Authentication & API

* Facebook Login using **OAuth 2.0**
* Secure access via **Facebook Graph API v19.0**
* Uses only the `public_profile` permission
* Short-lived access token handling

### Profile Data

* Fetch and display:

  * User full name
  * Profile picture
  * Facebook numeric user ID

### Frontend & UX

* 🌗 Light / Dark mode toggle
* 🔄 Session persistence using `sessionStorage`
* 📋 Copy Facebook ID using the Clipboard API
* ⏳ Loading indicator during API requests
* ⚠️ Error handling for expired or invalid sessions
* 🚪 Proper logout and session cleanup
* Dynamic UI state switching (logged out, loading, authenticated)

### Privacy & Transparency

* Clear privacy notice
* Data deletion support
* No data storage or tracking

### Implementation

* Simple, framework-free setup
* Pure **Vanilla JavaScript**
* Clean and responsive UI design

---

## Demo

![Application Demo](tuts.gif)

---

## Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**
* **Facebook Graph API v19.0**

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/karenlaureta/facebook-graph-api.git
```

### 2. Navigate to the project directory

```bash
cd facebook-graph-api
```

### 3. Configure Facebook App Credentials

Open `script.js` and update the following values:

```js
const APP_ID = "YOUR_FACEBOOK_APP_ID";
const REDIRECT_URI = "http://localhost:8000/";
```

Make sure the redirect URI exactly matches the one configured in your Facebook Developer Dashboard.

---

### 4. Run the application

You may open `index.html` directly, but **running a local server is strongly recommended** to avoid OAuth and browser security issues.

Using Node:

```bash
npx serve .
```

Using PHP:

```bash
php -S localhost:8000
```

Then open:

```
http://localhost:8000
```

---

## Facebook App Requirements

Ensure the following settings are configured in the **Facebook Developer Dashboard**:

* App Status: **Development Mode**
* Permissions enabled:

  * `public_profile`
* Your Facebook account added as:

  * Developer or Tester
* Valid OAuth Redirect URI matches `REDIRECT_URI`

---

## Usage

1. Open the application in your browser.
2. Click **Continue with Facebook**.
3. Log in and approve access to your public profile.
4. View your profile information in a styled profile card.
5. Optionally:

   * Toggle dark mode
   * Copy your Facebook ID
   * Log out to end the session

---

## Privacy & Data Policy

* Only **basic public profile data** is accessed.
* No personal data is stored, shared, or sold.
* All data remains client-side and session-based.
* Users may request data deletion via `delete.html`.

**Contact for privacy concerns:**
📧 [karenevangelistalaureta@gmail.com](mailto:karenevangelistalaureta@gmail.com)

---

## Limitations

* Intended for learning and demonstration only
* Not production-hardened
* No backend or database
* Relies on client-side OAuth flow
* Requires a Facebook account and developer app setup

---

## License

This project is provided for **educational and demonstration purposes only**.
Not licensed for commercial or production use.

