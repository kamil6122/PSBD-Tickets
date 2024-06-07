package com.example.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class PostojDTO {
    private Long id;
    private Integer dystans;
    private StacjaDTO stacja;
    private KursDTO kurs;
    private String czasOdjazdu;
    private String czasPrzyjazdu;
}
