package com.example.boat.entity;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "boat")
public class Boat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int boatid;
    String boatname;
    int price;
    String childcount;
    String adultcount;
    String boattype;
    String noOfBedRooms;
    String description;
    String rating;

    @OneToMany(mappedBy = "boat", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @Getter
    List<Booking> bookings;
}
