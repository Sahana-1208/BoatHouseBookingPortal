package com.example.boat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// import com.example.boat.entity.Booking;
import com.example.boat.entity.Users;
import com.example.boat.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/")
    public void addUser(@RequestBody Users user) {
        service.addUsers(user);
    }

    @GetMapping("/")
    public List<Users> getUsers() {
        return service.getUsers();
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable String id) {
        return service.getUserById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUserById(@PathVariable String id) {
        service.deleteUserById(id);
    }

    @PutMapping("/{id}")
    public void updateUserById(@PathVariable String id, @RequestBody Users updatedUser) {
        service.updateUserById(id, updatedUser);
    }

    // @GetMapping("/{id}/bookings")
    // public List<Booking> getUserBookings(@PathVariable String id) {
    //     return service.getUserBookings(id);
    // }
}
