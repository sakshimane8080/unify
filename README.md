# Unify

Unify is a lightweight campus information portal that brings student opportunities, notices, events, announcements, and attendance tools into one place instead of scattering them across group chats.

## What is included

- **Demo login:** Choose a Student or Staff / Admin portal. Any non-empty user ID and password are accepted.
- **Student portal (`student.html`):**
	- Search and filter scholarships, internships, and competitions.
	- View deadlines, notifications, notices, and circulars by category.
	- Browse events and workshops, register for an event, and view past-event history.
	- Ask questions about the AI & Design Workshop and view replies.
- **Staff / Admin portal (`staff.html`):**
	- Publish and delete student notices, including urgent notices.
	- Add and publish opportunities with a type, deadline, and value or award.
	- Mark workshop attendees as present.
	- Send announcements to the student notification widget.
	- Review recently sent announcements and registration gaps by category.
- **Shared browser state (`shared.js`):** Provides default demo data, local storage helpers, role guards, and logout behavior.
- **Responsive styling (`style.css`):** Shared layout, typography, components, and mobile breakpoints for all pages.

## Running the demo

No build step or package installation is required.

1. Open `index.html` in a browser, or serve the folder with any static web server.
2. Enter any values in the selected portal's two login fields.
3. Use the Student or Staff / Admin portal.
4. Open the other portal by logging out and signing in with the other role.

For a local static server, for example:

```text
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Data and demo behavior

This is a front-end demo and does not connect to a database or authentication service.

- The selected role and entered user ID are stored in `sessionStorage` for the current browser session.
- Editable portal data is stored in `localStorage` with keys prefixed by `unify_`.
- Staff changes appear immediately in the student portal when both pages use the same browser storage.
- Apply and event registration actions currently display demo confirmations; they do not submit applications or create registrations.
- To clear locally stored portal data, use the browser's site storage controls. The `resetStore()` helper in `shared.js` can also be called from the browser console.

## Project structure

```text
index.html    Demo login and role-based routing
student.html  Student opportunities, notices, events, and doubts portal
staff.html    Staff/admin publishing, attendance, announcements, and analytics portal
shared.js     Default data, storage helpers, authentication guards, and logout
style.css     Shared visual styles and responsive layout rules
README.md     Project documentation
```

## Notes

- The interface uses the Newsreader and IBM Plex Sans fonts from Google Fonts when network access is available.
- Dates for default opportunities are generated relative to the day the page loads, so countdowns stay current in the demo.