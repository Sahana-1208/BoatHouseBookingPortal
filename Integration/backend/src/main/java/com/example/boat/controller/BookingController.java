package com.example.boat.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.boat.entity.Booking;
import com.example.boat.service.BookingService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/booking/{bookingId}")
    public Booking getBookingById(@PathVariable int bookingId) {
        return bookingService.getBookingById(bookingId);
    }
    @GetMapping("/user/{userid}")
    public List<Booking> getBookingByuserId(@PathVariable String userid) {
        return bookingService.getBookingByuserId(userid);
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @PutMapping("/{bookingId}")
    public Booking updateBooking(@PathVariable int bookingId, @RequestBody Booking updatedBooking) {
        return bookingService.updateBooking(bookingId, updatedBooking);
    }

    @DeleteMapping("/{bookingId}")
    public void deleteBooking(@PathVariable int bookingId) {
        bookingService.deleteBooking(bookingId);
    }
}
