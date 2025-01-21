# Bug Report Application

This is a simple application that allows users to manage a list of bugs. Users can add, edit, delete, and view bugs. The app also includes features for sorting and filtering bugs, with the ability to sort them by date (oldest to newest and vice versa) and filter by status and priority. Priority tags are color-coded for easier identification.

The front-end styling is implemented using Material-UI, and Firebase is used for the backend.

## Live Demo

Explore the deployed application here: [Bug Report App](https://bug-form.web.app/)

---

## Features

- Add, edit, and delete bugs
- View a list of all bugs
- Sort bugs by creation date (oldest to newest and vice versa)
- Filter bugs by status and priority
- Color-coded priority tags
- Fully styled with Material-UI
- Backend powered by Firebase

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [json-server](https://www.npmjs.com/package/json-server) for local backend development

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running Locally

### Using the Preconfigured Backend

1. Update the project files:

   - Copy the code from `originalAPIRoutes.ts` (inside the `utils` folder) and paste it into `App.tsx` where the `API Routes` comment is located.
   - Update the `useEffect` function in `EditBug.tsx` to fetch data from the local server.
   - Uncomment the `BugResponse` interface in `EditBug.tsx` for type safety.

2. Start the local backend:

   ```bash
   json-server --watch db.json --port 3000 --host 0.0.0.0
   ```

3. Start the frontend:
   ```bash
   npm run dev
   ```

### Using Your Own Firebase Backend

1. Set up a Firebase project:

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Generate the required API keys.

2. Create a `.env` file in the root directory and populate it with the following variables:

   ```env
   VITE_API_KEY=<your-api-key>
   VITE_AUTH_DOMAIN=<your-auth-domain>
   VITE_PROJECT_ID=<your-project-id>
   VITE_STORAGE_BUCKET=<your-storage-bucket>
   VITE_MESSAGING_SENDER_Id=<your-messaging-sender-id>
   VITE_APP_ID=<your-app-id>
   VITE_MEASUREMENT_ID=<your-measurement-id>
   ```

   **Note:** If you're using Vite and TypeScript, ensure all variable names are prefixed with `VITE_`.

3. Create a `firebase.ts` file in a `config` folder:

   ```typescript
   // Import the functions you need from the SDKs
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   export interface FirebaseConfig {
     apiKey: string;
     authDomain: string;
     projectId: string;
     storageBucket: string;
     messagingSenderId: string;
     appId: string;
     measurementId?: string;
   }

   const firebaseConfig: FirebaseConfig = {
     apiKey: import.meta.env.VITE_API_KEY,
     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_Id,
     appId: import.meta.env.VITE_APP_ID,
     measurementId: import.meta.env.VITE_MEASUREMENT_ID,
   };

   // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

4. Start the frontend:
   ```bash
   npm run dev
   ```

---

## Technologies Used

- **Frontend**: React, TypeScript, Material-UI
- **Backend**: Firebase (for live deployment), json-server (for local development)
- **Deployment**: Vite

---

## Notes

- For type safety, ensure all necessary TypeScript interfaces are uncommented and implemented where required.
- If you encounter issues with environment variables, double-check that they are prefixed with `VITE_` as required by Vite.

---

Enjoy using the Bug Report Application!
