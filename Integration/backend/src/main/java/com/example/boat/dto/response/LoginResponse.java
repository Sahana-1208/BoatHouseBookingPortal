package com.example.boat.dto.response;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.boat.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@CrossOrigin
public class LoginResponse {
    private String message;
    private String token;
    private String id;
    private String name;
    private Role role;
}
