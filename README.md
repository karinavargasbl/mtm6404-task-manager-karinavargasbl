Developed by Karina Vargas
ID: 90541140462
Interactive Media Design Student
Algonquin College – Toronto, Canada | 2025

Iteration 5 - Capstone Final Project
GEM ORGANIZER - 📋 Task Manager App
A modern, fully responsive web application designed to help users stay organized by creating and managing multiple task lists. Built using React, the app enables sorting tasks by priority, toggling completed tasks, and ensures seamless real-time syncing with Firebase’s Firestore database, including offline support. Designed to meet all the functional and technical requirements of a Progressive Web App (PWA), this project was created for an advanced front-end development course focused on modern JavaScript frameworks and cloud integration.

Main Features
This feature-rich Task Manager leverages the power of React to deliver an intuitive and dynamic user experience. Users can:

Create unlimited task lists.
Add, delete, and update tasks with associated priority levels (High, Medium, Low).
Mark tasks as complete or incomplete.
Toggle views to show only completed or active tasks.
Sort tasks by priority in real-time.
Navigate between multiple task lists using React Router, ensuring smooth transitions without reloading the page.
Persist state and manage shared data across components efficiently using the Context API.
Enjoy full offline functionality with Firestore’s offline persistence, making the app usable without an internet connection.
The app’s responsive layout ensures accessibility across all screen sizes—from mobile phones to desktop monitors—delivering a clean and modern user interface.

🛠️ Technologies Used
React: A powerful JavaScript library used for building user interfaces. React was used to structure the app into reusable components, manage state, and handle dynamic updates without refreshing the page.

React Router: Enables seamless client-side routing. It allows users to switch between task lists and different views without full-page reloads, preserving the single-page application (SPA) experience.

Firebase & Firestore: Firebase serves as the backend platform, while Cloud Firestore is used as the real-time NoSQL database. Together, they provide fast data access, automatic sync between devices, and strong integration with React.

Context API: A built-in React feature used for managing and sharing global state (like current tasks and lists) across the entire application without prop drilling.

Vite: A modern front-end build tool that offers faster development and optimized builds. Vite was used to scaffold and run the app locally with near-instant reloads.

HTML5 & CSS3: Used to build the app’s structure and style. The app incorporates responsive design principles, flexbox/grid layouts, and modern CSS techniques to ensure a polished look and feel across devices.

☁️ How Firestore is Used in the App
This application fully integrates Firebase’s Cloud Firestore to manage and persist user data efficiently:

Task Lists Storage: Each user-created task list is saved as a document inside the lists collection. Metadata such as the list name and the showCompleted flag is included in each document to support UI filtering and display logic.

Tasks per List: Every list contains a tasks subcollection. Each task within it is stored as an individual document containing fields for task description, priority (High/Medium/Low), and completion status (completed boolean).

Real-Time Synchronization: The app listens for real-time updates using Firestore’s onSnapshot method. Any additions, edits, or deletions to tasks or lists are instantly reflected in the UI, ensuring a seamless user experience.

Offline Support: Firestore automatically enables offline persistence. Users can continue working on their tasks without an internet connection—any changes are stored locally and synchronized once connectivity is restored.

Run the Development Server

Start the Vite development server by running:
npm run dev

This will launch the app locally. Open your browser and go to http://localhost:5173

To start the deploy to firebase run these commands:
npm run build
then
firebase deploy
This will open the project hosting on firebase.
