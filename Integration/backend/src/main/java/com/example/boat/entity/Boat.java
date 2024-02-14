package com.example.boat.entity;


// import com.fasterxml.jackson.annotation.JsonManagedReference;

// import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
// import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

// import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Boat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int boatid;

    private String boatname;
    private int price;
    private String childcount;
    private String adultcount;
    private String boattype;
    private String noOfBedRooms;
    private String description;
    private String rating;

}
