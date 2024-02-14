package com.example.boat.dto.response;

import com.example.boat.enumerated.Role;

public class UserDTO {
    private String id;
    private String name;
    private Role role;

    // Constructors, getters, and setters

    public UserDTO() {
        // Default constructor
    }

    public UserDTO(String id, String name, Role role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    // Getters and setters for each field

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
