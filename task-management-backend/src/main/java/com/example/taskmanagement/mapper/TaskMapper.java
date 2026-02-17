package com.example.taskmanagement.mapper;

import com.example.taskmanagement.dto.TaskDTO;
import com.example.taskmanagement.model.Task;

public class TaskMapper {

    public static TaskDTO toDTO(Task task) {
        if (task == null) return null;

        return TaskDTO.builder()
                .id(task.getId())
                .title(task.getTitle())
                .description(task.getDescription())
                .completed(task.getIsCompleted())   // wrapper safe
                .dueDate(task.getDueDate())
                .build();
    }

    public static Task toEntity(TaskDTO dto) {
        if (dto == null) return null;

        return Task.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .isCompleted(
                        dto.getCompleted() != null ? dto.getCompleted() : false
                )
                .dueDate(dto.getDueDate())
                .build();
    }
}
