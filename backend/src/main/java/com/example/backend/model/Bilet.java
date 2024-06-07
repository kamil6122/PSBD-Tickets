package com.example.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Positive;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "bilety")
@Entity
@ToString
public class Bilet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Positive(message = "Cena musi być większa od 0")
    private BigDecimal cena;

    @NonNull
    private String znizka;

    @NonNull
    private Integer wagon;

    @NonNull
    private Integer miejsce;

    @NonNull
    private LocalDateTime data_godzina_waznosci;

    @CreationTimestamp
    private LocalDateTime data_godzina_zakupu;

    @NonNull
    @ManyToOne
    private Postoj postoj_początkowy;

    @NonNull
    @ManyToOne
    private Postoj postoj_koncowy;
}
