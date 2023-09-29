# Task-manager
The Task Manager API provides endpoints for managing tasks. 
You can use this API to perform various operations related to tasks,
including creating, retrieving, updating, and deleting tasks.

## API Endpoints

### 1. Retrieve All Tasks

- **Endpoint**: `GET /tasks`
- **Description**: Retrieve a list of all tasks currently stored in the system.
- **Usage**: This endpoint can be used to view all tasks or to display a list of tasks for a specific user or project.

### 2. Retrieve a Single Task

- **Endpoint**: `GET /tasks/:id`
- **Description**: Retrieve a single task by its unique identifier (ID).
- **Usage**: You can use this endpoint to fetch the details of a specific task based on its ID.

### 3. Create a New Task

- **Endpoint**: `POST /tasks`
- **Description**: Create a new task and add it to the task list.
- **Usage**: To create a new task, send a POST request to this endpoint with the task details (e.g., title, description, due date) in the request body.

### 4. Update an Existing Task

- **Endpoint**: `PUT /tasks/:id`
- **Description**: Update an existing task's information by specifying its unique identifier (ID).
- **Usage**: To update a task, send a PUT request to this endpoint with the updated task details in the request body, including the task ID.

### 5. Delete a Task

- **Endpoint**: `DELETE /tasks/:id`
- **Description**: Delete a task by its unique identifier (ID).
- **Usage**: To remove a task from the task list, send a DELETE request to this endpoint with the task's ID.


