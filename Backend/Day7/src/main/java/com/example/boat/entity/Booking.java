package com.example.boat.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int bookingid;
    boolean status;
    int adults;
    int child;
    LocalDate fromDate;
    LocalDate toDate;

    @ManyToOne
    @JoinColumn(name = "boatid", nullable = false)
    @JsonBackReference
    private Boat boat;
}
