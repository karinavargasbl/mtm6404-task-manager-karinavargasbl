For Iteration 2 of the Capstone Project "Task Manager for Del Mar Gems" 
                    GEM ORGANIZER

This is a static React task manager rebuilt with Vite. It includes three main components: NavBar, TaskItem, and Footer. I used props to pass task details to TaskItem and the children prop in NavBar for menu items. The tasks list is rendered using list rendering, and conditional rendering shows task status (completed or not). There’s also a filter dropdown and a counter, but these are static UI elements just to show how filtering would look. The app is responsive and styled with CSS. 

Iteration 3

Key React Concepts Used:
Props Implementation:

NavBar: Receives onNavClick prop to handle tab switching and children prop for flexible content injection
TaskBoard: Takes tasks, onRemove, and onToggleComplete props to manage task operations
TaskItem: Receives task, onRemove, and onToggleComplete props for individual task management
CreateTaskForm: Uses addTask prop to communicate with parent component
Reports: Takes tasks prop to generate statistics
SearchTask & ToggleCompleted: Receive state and setter functions as props

LocalStorage Integration:
You implemented persistent data storage for:

Tasks array
Show completed filter state
Priority filter selection
Active tab state
Panel visibility state

Layout Structure:

Vertical Stack Layout: Form section at top, task section below
Horizontal Task Cards: Tasks displayed as individual cards
Responsive Grid: Adapts to different screen sizes

To Run:
npm run dev
