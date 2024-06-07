package com.example.backend.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "postoje")
@Entity
@ToString
public class Postoj {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Positive
    private Integer dystans;

    @NonNull
    @ManyToOne
    private Stacja stacja;

    @NonNull
    @ManyToOne
    private Kurs kurs;

    @NonNull
    private LocalDateTime czas_odjazdu;

    @NonNull
    private LocalDateTime czas_przyjazdu;
}
