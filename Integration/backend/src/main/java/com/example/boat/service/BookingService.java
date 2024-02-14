package com.example.boat.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Booking;
import com.example.boat.repository.BookingRepo;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(int bookingId) {
        return bookingRepository.findById(bookingId).orElse(null);
    }

    public List<Booking> getBookingByuserId(String userid){
        return bookingRepository.findByUserid(userid);
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(int bookingId, Booking updatedBooking) {
        Booking existingBooking = bookingRepository.findById(bookingId).orElse(null);
        if (existingBooking != null) {
            // Update fields based on your requirements
            existingBooking.setAdults(updatedBooking.getAdults());
            existingBooking.setChild(updatedBooking.getChild());
            existingBooking.setFromDate(updatedBooking.getFromDate());
            existingBooking.setToDate(updatedBooking.getToDate());
            return bookingRepository.save(existingBooking);
        }
        return null;
    }

    public void deleteBooking(int bookingId) {
        bookingRepository.deleteById(bookingId);
    }
}
