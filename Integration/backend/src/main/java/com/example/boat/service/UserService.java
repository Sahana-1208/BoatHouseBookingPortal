package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.example.boat.entity.Booking;
import com.example.boat.entity.Users;
import com.example.boat.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    UserRepo repository;

    public List<Users> getUsers() {
        return repository.findAll();
    }

    public void addUsers(Users user) {
        repository.save(user);
    }

    public Users getUserById(String id) {
        return repository.findById(id).orElse(null);
    }

    public void deleteUserById(String id) {
        repository.deleteById(id);
    }

    public void updateUserById(String id, Users updatedUser) {
        Users existingUser = repository.findById(id).orElse(null);
        if (existingUser != null) {
            // Update user fields based on your requirements
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setRole(updatedUser.getRole());
            existingUser.setAddress(updatedUser.getAddress());

            repository.save(existingUser);
        }
    }

    
    // public List<Booking> getUserBookings(String userId) {
    //     Users user = repository.findById(userId).orElse(null);
    //     return user != null ? user.getBookings() : null;
    // }
}
