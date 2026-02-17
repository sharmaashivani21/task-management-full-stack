package com.example.taskmanagement.service;

import com.example.taskmanagement.dto.TaskDTO;
import com.example.taskmanagement.exception.TaskNotFoundException;
import com.example.taskmanagement.mapper.TaskMapper;
import com.example.taskmanagement.model.Task;
import com.example.taskmanagement.repository.TaskRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

/**
 * Service layer responsible for handling business logic
 * related to Task management.
 *
 * Responsibilities:
 * - Fetch paginated task data
 * - Create new tasks
 * - Update existing tasks
 * - Delete tasks
 * - Convert between Entity and DTO
 *
 * Author: Shivani
 */
@Service
@RequiredArgsConstructor
@Transactional
public class TaskService {

    private final TaskRepository repository;

    /**
     * Fetch all tasks with optional completion filter.
     */
    public Page<TaskDTO> getAllTasks(Boolean completed, Pageable pageable) {

        Page<Task> tasks;

        if (completed != null) {
            tasks = repository.findAll(
                    (root, query, cb) ->
                            cb.equal(root.get("isCompleted"), completed),
                    pageable
            );
        } else {
            tasks = repository.findAll(pageable);
        }

        return tasks.map(TaskMapper::toDTO);
    }

    /**
     * Fetch single task by ID.
     */
    public TaskDTO getTask(Long id) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));

        return TaskMapper.toDTO(task);
    }

    /**
     * Create a new task.
     */
    public TaskDTO createTask(TaskDTO dto) {

        Task entity = TaskMapper.toEntity(dto);
        Task saved = repository.save(entity);

        return TaskMapper.toDTO(saved);
    }

    /**
     * Update an existing task.
     */
    public TaskDTO updateTask(Long id, TaskDTO dto) {

        Task existing = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));

        existing.setTitle(dto.getTitle());
        existing.setDescription(dto.getDescription());
        existing.setIsCompleted(
                dto.getCompleted() != null ? dto.getCompleted() : false
        );
        existing.setDueDate(dto.getDueDate());

        Task updated = repository.save(existing);

        return TaskMapper.toDTO(updated);
    }

    /**
     * Delete a task by ID.
     */
    public void deleteTask(Long id) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));

        repository.delete(task);
    }
}