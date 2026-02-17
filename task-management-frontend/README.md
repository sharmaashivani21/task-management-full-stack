# Task Management Frontend

React + TypeScript frontend built using Vite and integrated with Spring Boot backend APIs.

---

## Tech Stack

- React 18
- TypeScript
- Vite
- Axios
- React Router
- React Toastify

---

## Features

- Create Task
- Update Task
- Delete Task (Custom Confirmation Modal)
- View Task Details
- Pagination-ready API integration
- Toast notifications for success and errors
- Loading states
- Clean component-based structure

---

## Project Structure

pages/
TaskListPage
TaskDetailPage

components/
TaskCard
TaskForm
ConfirmModal

api/
taskApi (Axios with interceptors)

---

## Notification Strategy

- Axios interceptor handles API errors centrally
- Backend validation errors displayed via toast
- Network failures handled gracefully
- Success actions show confirmation toast

---

## Custom Confirmation Modal

Browser confirm() replaced with a reusable modal component featuring:

- Overlay background
- Yes / No buttons
- Clean styling
- Reusable architecture

---

## Running the Frontend

cd frontend  
npm install  
npm run dev

Application runs at:
http://localhost:5173

---

## Backend Integration

Base API URL:
http://localhost:8080/api/tasks

Ensure backend is running before starting frontend.

---

## Future Enhancements

- UI pagination controls
- Filtering and sorting UI
- Dark mode
- Animation transitions
- Global state management
- Docker deployment

---

Author: Shivani
