package com.example.backend.model;


import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "kursy")
@Entity
@ToString
public class Kurs {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @ManyToOne
    private Przewoznik przewoznik;

    @NonNull
    @ManyToOne
    private Pociag pociag;

    @NonNull
    @ManyToOne
    private Stacja stacja_początkowa;

    @NonNull
    @ManyToOne
    private Stacja stacja_koncowa;
}
