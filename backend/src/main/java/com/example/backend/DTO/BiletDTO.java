package com.example.backend.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class BiletDTO {
    private BigDecimal cena;
    private Integer wagon;
    private Integer miejsce;
    private LocalDateTime data_godzina_waznosci;
    @Nullable
    private LocalDateTime data_godzina_zakupu;
    private PostojDTO postoj_początkowy;
    private PostojDTO postoj_koncowy;
}
