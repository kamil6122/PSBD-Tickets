package com.example.backend.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "stacje")
public class Stacja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @NotBlank
    private String nazwa;

    @NonNull
    @NotBlank
    private String miasto;

    @NonNull
    @NotBlank
    private String wojewodztwo;
}
