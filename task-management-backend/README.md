# Task Management Backend

Spring Boot REST API for managing tasks with layered architecture and DTO-based API design.

---

## Tech Stack

- Java 21
- Spring Boot 3
- Spring Data JPA
- H2 In-Memory Database
- Gradle
- Lombok

---

## Architecture

The backend follows a clean layered architecture:

Controller → Service → Repository → Database  
↓  
Mapper  
↓  
DTO

Layer Responsibilities:

- Controller: Exposes REST endpoints
- Service: Contains business logic and transaction management
- Repository: Data access using JPA
- DTO: API contract isolation
- Mapper: Converts Entity ↔ DTO
- GlobalExceptionHandler: Centralized error handling

---

## API Endpoints

GET    /api/tasks  
GET    /api/tasks/{id}  
POST   /api/tasks  
PUT    /api/tasks/{id}  
DELETE /api/tasks/{id}

---

## Pagination & Filtering

Examples:

GET /api/tasks?page=0&size=5  
GET /api/tasks?completed=true  
GET /api/tasks?page=0&size=5&sort=dueDate,desc

---

## Error Handling

All exceptions are handled using @RestControllerAdvice.

Example Error Response:

{
"message": "Task with ID 10 not found",
"status": 404,
"timestamp": "2026-02-17T14:00:00"
}

Handled cases:
- Task not found
- Validation errors
- JSON conversion errors
- Generic server errors

---

## DTO-Based API Design

The API does not expose Entity objects directly.

Benefits:
- Prevents tight coupling
- Protects internal data model
- Enables future scalability
- Maintains clean API contract

---

## Running the Backend

cd backend  
gradlew bootRun

Application runs at:
http://localhost:8080

H2 Console (if enabled):
http://localhost:8080/h2-console

---

## Sample Create Request

POST /api/tasks

{
"title": "Assessment",
"description": "Complete backend",
"completed": false,
"dueDate": "2026-02-20"
}

---

## Future Improvements

- JWT Authentication
- Persistent database (PostgreSQL)
- Integration testing
- API versioning
- Docker support

---

Author: Shivani
