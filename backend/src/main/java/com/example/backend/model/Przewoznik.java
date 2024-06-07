package com.example.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "przewoznicy")
public class Przewoznik {
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    @NotBlank
    private String nazwa;

    @NonNull
    @NotBlank
    private String skrot;
}
