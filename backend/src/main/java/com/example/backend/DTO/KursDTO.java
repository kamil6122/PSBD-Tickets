package com.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class KursDTO {
    private PrzewoznikDTO przewoznik;
    private PociagDTO pociag;
    private StacjaDTO stacja_poczatkowa;
    private StacjaDTO stacja_koncowa;
}
