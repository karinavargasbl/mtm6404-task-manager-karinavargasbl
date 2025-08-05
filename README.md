# GEM ORGANIZER - 📋 Task Manager App  
**Iteration 5 – Capstone Final Project**  
**Developed by Karina Vargas**  
**ID:** 90541140462  
**Interactive Media Design Student**  
**Algonquin College – Toronto, Canada | 2025**

---

##  Project Overview

GEM Organizer is a modern, fully responsive web application designed to help users stay organized by creating and managing multiple task lists. Built using **React**, the app enables sorting tasks by priority, toggling completed tasks, and ensures seamless real-time syncing with **Firebase’s Firestore** database, including offline support.

This project meets all the functional and technical requirements of a **Progressive Web App (PWA)** and was developed for an advanced front-end development course focused on **modern JavaScript frameworks** and **cloud integration**.

---

##  Main Features

This feature-rich Task Manager leverages the power of React to deliver an intuitive and dynamic user experience. Users can:

- ✅ Create unlimited task lists  
- ✏️ Add, delete, and update tasks with priority levels (**High**, **Medium**, **Low**)  
- ✔️ Mark tasks as complete or incomplete  
- 🔄 Toggle views to show only completed or active tasks  
- ⬆️ Sort tasks by priority in real-time  
- 📁 Navigate between multiple task lists using **React Router**  
- 🧠 Persist state and share data across components using the **Context API**  
- 🔌 Use the app offline with **Firestore’s offline persistence**  
- 📱 Enjoy a fully responsive layout optimized for all screen sizes and devices  

---

##  Technologies Used

- **React**  
  A powerful JavaScript library used for building component-based user interfaces. React was used to structure the app into reusable components, manage state, and render changes dynamically without reloading the page.

- **React Router**  
  Provides seamless client-side routing. Enables navigation between different task lists and views while maintaining a single-page application (SPA) experience.

- **Firebase & Firestore**  
  Firebase acts as the backend service. Cloud Firestore, its real-time NoSQL database, stores user data and ensures automatic synchronization between devices, with built-in support for offline access.

- **Context API**  
  React's built-in tool for managing global state. It allows components at different levels of the component tree to access shared data (like task lists) without having to pass props manually.

- **Vite**  
  A blazing-fast front-end development tool. It was used to scaffold and build the project, providing fast refresh and optimized production builds.

- **HTML5 & CSS3**  
  Used to build the layout and visual style of the app. Responsive design, flexbox/grid systems, and modern CSS techniques ensure a clean, accessible, and polished UI across all devices.

---

## ☁️ How Firestore is Used in the App

The application integrates **Firebase’s Cloud Firestore** to manage and persist user data efficiently:

### 📁 Task Lists Storage
All task lists are stored as documents in the `lists` collection. Each document contains metadata such as:
- List name
- `showCompleted` flag (controls whether completed tasks are shown)

### 🗂️ Tasks per List
Each task is stored as a document inside a `tasks` subcollection under its respective list. Each task includes:
- Description
- Priority level (High, Medium, Low)
- Completion status (`completed` boolean)

### 🔄 Real-Time Synchronization
The app uses Firestore's `onSnapshot` listener to receive real-time updates. Any addition, update, or deletion is immediately reflected in the UI—no manual refresh needed.

### 🌐 Offline Support
Firestore automatically enables offline persistence. Users can continue to use the app without internet access, and changes will sync automatically once the connection is restored.

---

Run the Development Server

Start the Vite development server by running:
npm run dev

This will launch the app locally. Open your browser and go to http://localhost:5173

To start the deploy to firebase run these commands:
npm run build
then
firebase deploy
This will open the project hosting on firebase.
