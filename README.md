# Facebook Graph API Demo

A lightweight web application that demonstrates **Facebook Graph API** integration using OAuth 2.0 to fetch and display basic user profile information in a clean, user-friendly interface.
This project is intended for **educational and demonstration purposes**, showcasing how third-party authentication and API consumption work in a modern web environment.

---

## Overview

The application allows users to log in with their Facebook account and retrieve publicly available profile data such as name, profile picture, and user ID. It also includes UI enhancements like dark mode, loading states, and error handling to improve user experience.

---

## Features

- Facebook Login using **OAuth 2.0**
- Fetch and display:
  - User name
  - Profile picture
  - Facebook user ID
- Dark mode toggle
- Loading and error state handling
- Privacy policy and data deletion support
- Simple, framework-free implementation

---

## Demo

![Application Demo](tuts.gif)

---

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Facebook Graph API v19.0**

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/karenlaureta/facebook-graph-api.git
````

### 2. Navigate to the project directory

```bash
cd facebook-graph-api
```

### 3. Configure Facebook App Credentials

* Open `script.js`
* Replace `APP_ID` with your **Facebook App ID**
* Update `REDIRECT_URI` to match your local or deployed URL

Example:

```js
const APP_ID = "YOUR_FACEBOOK_APP_ID";
const REDIRECT_URI = "http://localhost:8000/";
```

### 4. Run the application

You may open `index.html` directly, but **using a local server is strongly recommended** for OAuth compatibility.

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

Ensure the following settings are configured in your Facebook Developer Dashboard:

* App Status: **Development Mode**
* Permissions enabled:

  * `public_profile`
* Your Facebook account added as:

  * Developer or Tester
* Valid OAuth redirect URI matches `REDIRECT_URI`

---

## Usage

1. Open the application in your browser.
2. Click **Continue with Facebook**.
3. Grant permission to access your public profile.
4. Your profile information will be displayed in a styled card.

---

## Privacy & Data Policy

* Only **basic public profile data** is accessed.
* No personal data is stored, shared, or sold.
* Users may request data deletion via `delete.html`.

**Contact for privacy concerns:**
📧 [karenevangelistalaureta@gmail.com](mailto:karenevangelistalaureta@gmail.com)

---

## Limitations

* Intended for demo and learning purposes only
* Not production-hardened
* No backend or persistent storage
* Requires Facebook account and developer app configuration

---

## License

This project is provided for **educational and demonstration purposes only**.
Not licensed for commercial use.
