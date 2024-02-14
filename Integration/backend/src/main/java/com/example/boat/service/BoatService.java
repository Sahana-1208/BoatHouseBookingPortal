package com.example.boat.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Boat;
import com.example.boat.repository.BoatRepo;

import java.util.List;

@Service
public class BoatService {

    @Autowired
    private BoatRepo boatRepository;

    public List<Boat> getAllBoats() {
        return boatRepository.findAll();
    }

    public Boat getBoatById(int boatId) {
        return boatRepository.findById(boatId).orElse(null);
    }

    public Boat createBoat(Boat boat) {
        return boatRepository.save(boat);
    }

    public Boat updateBoat(int boatId, Boat updatedBoat) {
        Boat existingBoat = boatRepository.findById(boatId).orElse(null);
        if (existingBoat != null) {
            // Update fields based on your requirements
            existingBoat.setBoatname(updatedBoat.getBoatname());
            existingBoat.setPrice(updatedBoat.getPrice());
            existingBoat.setChildcount(updatedBoat.getChildcount());
            existingBoat.setAdultcount(updatedBoat.getAdultcount());
            existingBoat.setBoattype(updatedBoat.getBoattype());
            existingBoat.setNoOfBedRooms(updatedBoat.getNoOfBedRooms());
            existingBoat.setDescription(updatedBoat.getDescription());
            existingBoat.setRating(updatedBoat.getRating());

            return boatRepository.save(existingBoat);
        }
        return null;
    }

    public void deleteBoat(int boatId) {
        boatRepository.deleteById(boatId);
    }
}
