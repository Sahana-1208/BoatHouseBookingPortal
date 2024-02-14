package com.example.boat.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.boat.entity.Boat;
import com.example.boat.service.BoatService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/boats")
public class BoatController {

    @Autowired
    private BoatService boatService;

    @GetMapping
    public List<Boat> getAllBoats() {
        return boatService.getAllBoats();
    }

    @GetMapping("/{boatId}")
    public Boat getBoatById(@PathVariable int boatId) {
        return boatService.getBoatById(boatId);
    }

    @PostMapping
    public Boat createBoat(@RequestBody Boat boat) {
        return boatService.createBoat(boat);
    }

    @PutMapping("/{boatId}")
    public Boat updateBoat(@PathVariable int boatId, @RequestBody Boat updatedBoat) {
        return boatService.updateBoat(boatId, updatedBoat);
    }

    @DeleteMapping("/{boatId}")
    public void deleteBoat(@PathVariable int boatId) {
        boatService.deleteBoat(boatId);
    }
}
