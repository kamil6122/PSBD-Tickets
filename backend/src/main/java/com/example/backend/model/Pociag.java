package com.example.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "pociagi")
@ToString
public class Pociag {
    @Id
    private String numer_pociagu;

    @NonNull
    @NotBlank
    private String nazwa;
}
