# Task Management Application

Full-stack Task Management application built using Spring Boot and React.

---

## Tech Stack

Backend:
- Java 21
- Spring Boot 3
- Spring Data JPA
- H2 Database
- Gradle

Frontend:
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
- Pagination-ready API
- DTO-based backend architecture
- Global exception handling
- Toast notifications for success and errors

---

## Project Structure

task-management/
backend/
frontend/

---

## Running the Application

Start Backend:

cd backend  
gradlew bootRun

Backend runs on:
http://localhost:8080

Start Frontend:

cd frontend  
npm install  
npm run dev

Frontend runs on:
http://localhost:5173

---

## Architecture Overview

Frontend (React)
↓
REST API (Spring Boot)
↓
Service Layer
↓
Repository (JPA)
↓
H2 Database

---

## Design Principles

- Clean layered architecture
- DTO-based API contract
- Centralized exception handling
- Reusable UI components
- Separation of concerns
- Scalable structure

---

Author: Shivani
