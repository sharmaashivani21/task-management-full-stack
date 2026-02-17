package com.example.taskmanagement.controller;

import com.example.taskmanagement.dto.TaskDTO;
import com.example.taskmanagement.service.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

/**
 * REST Controller for Task Management APIs.
 *
 * Exposes CRUD endpoints for managing tasks.
 * All responses use DTOs to ensure API contract isolation
 * from internal entity representation.
 *
 * Author: Shivani
 */
@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService service;

    /**
     * Fetch paginated tasks with optional completed filter.
     */
    @GetMapping
    public Page<TaskDTO> getTasks(
            @RequestParam(required = false) Boolean completed,
            Pageable pageable
    ) {
        return service.getAllTasks(completed, pageable);
    }

    /**
     * Fetch single task by ID.
     */
    @GetMapping("/{id}")
    public TaskDTO getTask(@PathVariable Long id) {
        return service.getTask(id);
    }

    /**
     * Create new task.
     */
    @PostMapping
    public TaskDTO create(@Valid @RequestBody TaskDTO dto) {
        return service.createTask(dto);
    }

    /**
     * Update existing task.
     */
    @PutMapping("/{id}")
    public TaskDTO update(@PathVariable Long id,
                          @Valid @RequestBody TaskDTO dto) {
        return service.updateTask(id, dto);
    }

    /**
     * Delete task by ID.
     */
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteTask(id);
    }
}


