Student: Karina Del Mar
ID: 90541140462

Iteration 4 - Capstone project

GEM ORGANIZER - Task Manager

In developing my React task manager, I focused on creating a user-friendly application that allows for efficient task management. I began by setting up the project using React, which provided a robust framework for building the user interface. To facilitate seamless navigation between different views, such as task lists and reports, I integrated React Router. This allowed me to define clear routes for each page, ensuring that users could easily access the features they needed.

To manage the application's state effectively, I utilized the Context API. This approach enabled me to create a global state for tasks, allowing any component within my application to access and modify task data without the complications of prop drilling. 

Navbar: I designed the NavBar component to facilitate navigation, providing links to the task lists and reports. The reports page displays useful statistics, such as the total number of tasks across all lists, enhancing the user experience.

In terms of functionality, I implemented features that allow users to create multiple task lists, each containing tasks with varying priority levels (High, Medium, Low). Users can easily toggle the completion status of tasks, providing a clear visual representation of their progress. To ensure that user data persists even after refreshing the page, I incorporated localStorage, which stores the task lists and their states.

For the visual design, I opted for a vibrant color scheme that includes gradients, such as blue and purple for the header and distinct colors for priority tags. This not only makes the application visually appealing but also enhances usability. I also ensured that the design is responsive, allowing users to access the application comfortably on both desktop and mobile devices.

To run my application, I simply need to execute the following commands in the terminal: npm run dev
This launches the development server, and I can view my task manager live at localhost:3000.



