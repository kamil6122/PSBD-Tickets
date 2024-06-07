package com.example.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "kursy")
public class Kurs {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private Przewoznik przewoznik;

    @NonNull
    private Pociag pociag;

    @NonNull
    private Stacja stacja_początkowa;

    @NonNull
    private Stacja stacja_koncowa;
}
