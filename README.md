# Unify

## Run the project

Open `index.html` directly in a browser, or run this in PowerShell from the project folder:

```powershell
start .\index.html
```
Unify is a browser-based campus portal that brings student opportunities, notices,
events, announcements, and staff tools into one place.

## Features

### Student portal

- Browse scholarships, internships, and competitions.
- Search opportunities and filter them by category.
- View deadlines and notification updates.
- Read academic, hostel, and exam notices.
- View events and workshops, then register for an event.
- View past-event history.
- Ask questions about the AI & Design Workshop and see replies.

### Staff and admin portal

- Publish and delete student notices.
- Mark notices as important or urgent.
- Add and publish opportunities with a category, deadline, and value.
- Track event attendance with digital checkboxes.
- Send announcements to the student notification widget.
- View recently sent announcements.
- View registration statistics in the gap detector.

## Getting started

This project is a static frontend and does not require a build step or backend.

1. Open `index.html` in a modern browser.
2. Choose either the Student or Staff / Admin login.
3. Enter any value in both login fields. This is demo authentication, so no real
	 account is required.

For the most reliable local experience, serve the folder with any static file
server and open the resulting local URL. The pages can also be opened directly
from the file system in browsers that allow local storage for files.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Demo login screen and role-based routing |
| `student.html` | Student dashboard, feeds, events, deadlines, and doubts |
| `staff.html` | Staff/admin dashboard for publishing and managing campus content |
| `shared.js` | Default data, browser storage helpers, role guards, and logout logic |
| `style.css` | Shared responsive layout, typography, colors, and components |

## Data and authentication

- Login state is stored in `sessionStorage` under `unify_role` and `unify_user`.
- Opportunities, notices, notifications, announcements, attendance, and doubts
	are stored in `localStorage` with keys prefixed by `unify_`.
- The initial demo data is defined in `shared.js` and is copied into storage when
	no saved data exists.
- This prototype has no server, database, real authentication, or persistent
	multi-user account system. Data is local to the current browser profile.

To restore the default demo data, clear the site's local storage in the browser's
developer tools, then reload the pages. Logging out clears only the current login
session; it does not delete saved portal data.

## Technologies

- HTML5
- CSS3 with responsive media queries
- Vanilla JavaScript
- Browser `sessionStorage` and `localStorage`
- Google Fonts: Newsreader and IBM Plex Sans
