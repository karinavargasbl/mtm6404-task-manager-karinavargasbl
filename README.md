Developed by
Karina Vargas
ID: 90541140462
Interactive Media Design Student
Algonquin College – Toronto, Canada
2025

Iteration 5 - Capstone Final Project

GEM ORGANIZER - 📋 Task Manager App
A modern, responsive web application built with React that lets users create and manage multiple task lists, sort tasks by priority, and sync everything with Firestore, including offline persistence. This project meets the full requirements of a Progressive Web App (PWA) and was developed for an advanced front-end development course.

Main Features

This React-based Task Manager application allows users to create and manage multiple task lists with ease. Each list can contain tasks that include priority levels—High, Medium, or Low—and can be marked as completed or incomplete. Users can toggle the view to show only completed tasks and sort tasks by their priority. The app includes seamless navigation between lists using React Router and maintains consistent state across components using the Context API. Data is stored in real time using Firebase Firestore, and offline persistence ensures the app remains functional without an internet connection. The user interface is responsive and visually modern, adapting smoothly to all screen sizes and devices.

🛠️ Technologies Used

React
React Router
Firebase Firestore
Context API
Vite
HTML5, CSS3

☁️ How Firestore is Used in the App
This application integrates Firebase’s Cloud Firestore to store and manage all user data, including task lists and individual tasks. Here's how Firestore is used:

Task Lists Storage: All task lists are saved inside the lists collection in Firestore. Each list document contains metadata like the list's name and the showCompleted flag which determines whether completed tasks should be shown or hidden.

Tasks per List: Each task is stored as a document inside a tasks subcollection under its respective list. Each task document includes a description, priority level, and a completed boolean status.

Real-Time Sync: The app uses Firestore's onSnapshot listener to sync changes in real-time. Whenever a user adds, updates, or deletes a task or a list, the UI updates instantly without the need for manual refresh.

Offline Support: Firestore supports offline persistence automatically. This means users can continue to add or modify tasks without an internet connection, and those changes will sync automatically once the connection is restored.

Run the Development Server

Start the Vite development server by running:
npm run dev

This will launch the app locally. Open your browser and go to http://localhost:5173

To start the firebase deploy run these commands:
npm run build
then
firebase deploy