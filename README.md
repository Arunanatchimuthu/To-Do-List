# To-Do-List

## Project Overview  
The **To-Do List App** is a simple task management application that allows users to add, update, and delete tasks. The app provides a user-friendly interface for organizing daily tasks and keeps track of deadlines using a completion date feature.  

## Features  
- **Task Management**: Add, view, and delete tasks effortlessly.  
- **Deadline Tracking**: Users can set completion dates for tasks.  
- **Real-time Updates**: The UI dynamically updates when tasks are modified.  
- **REST API**: Built using Node.js and Express for efficient task handling.  
- **Persistent Storage**: Uses MongoDB to store tasks permanently.  

## Technologies Used  
### Frontend  
- **HTML, CSS**: For the UI design and layout.  
- **JavaScript (app.js)**: Handles task operations and API calls.  

### Backend  
- **Node.js & Express**: Server-side logic and API routing.  
- **MongoDB & Mongoose**: Stores tasks and manages database operations.  

## Installation and Setup  
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Start MongoDB  
Ensure MongoDB is running locally or provide a MongoDB Atlas connection string.  
```sh
mongod
```
Or connect via MongoDB Atlas.

### 4️⃣ Run the Server  
```sh
node index.js
```

### 5️⃣ Open the App  
- Open `index.html` in a browser to access the To-Do List UI.  
- Add and manage tasks directly from the interface.  

## Future Enhancements  
- **Task Prioritization**: Allow users to set task priorities.  
- **Calendar View**: Show tasks in a calendar layout.  
- **Notifications**: Reminder alerts for upcoming tasks.  
- **Mobile-Friendly UI**: Improve responsiveness for mobile devices.  
