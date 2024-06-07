-- Dodanie danych do tabeli przewoznicy
INSERT INTO przewoznicy (nazwa, skrot) VALUES ('PKP Intercity', 'PKP');
INSERT INTO przewoznicy (nazwa, skrot) VALUES ('Koleje Mazowieckie', 'KM');

-- Dodanie danych do tabeli pociagi
INSERT INTO pociagi (numer_pociagu, nazwa) VALUES ('IC1234', 'Pendolino');
INSERT INTO pociagi (numer_pociagu, nazwa) VALUES ('KM5678', 'Flirt');

-- Dodanie danych do tabeli stacje
INSERT INTO stacje (nazwa, miasto, wojewodztwo) VALUES ('Warszawa Centralna', 'Warszawa', 'Mazowieckie');
INSERT INTO stacje (nazwa, miasto, wojewodztwo) VALUES ('Kraków Główny', 'Kraków', 'Małopolskie');
INSERT INTO stacje (nazwa, miasto, wojewodztwo) VALUES ('Gdańsk Główny', 'Gdańsk', 'Pomorskie');

-- Dodanie danych do tabeli kursy
INSERT INTO kursy (przewoznik_id, pociag_numer_pociagu, stacja_początkowa_id, stacja_koncowa_id)
VALUES (1, 'IC1234', 1, 2);
INSERT INTO kursy (przewoznik_id, pociag_numer_pociagu, stacja_początkowa_id, stacja_koncowa_id)
VALUES (2, 'KM5678', 1, 3);

-- Dodanie danych do tabeli postoje
INSERT INTO postoje (dystans, stacja_id, kurs_id, czas_odjazdu, czas_przyjazdu)
VALUES (0, 1, 1, '2024-06-07 08:00:00', '2024-06-07 08:05:00');
INSERT INTO postoje (dystans, stacja_id, kurs_id, czas_odjazdu, czas_przyjazdu)
VALUES (200, 2, 1, '2024-06-07 10:00:00', '2024-06-07 10:05:00');
INSERT INTO postoje (dystans, stacja_id, kurs_id, czas_odjazdu, czas_przyjazdu)
VALUES (0, 1, 2, '2024-06-07 11:00:00', '2024-06-07 11:05:00');
INSERT INTO postoje (dystans, stacja_id, kurs_id, czas_odjazdu, czas_przyjazdu)
VALUES (300, 3, 2, '2024-06-07 13:00:00', '2024-06-07 13:05:00');

-- Utworzenie biletów
INSERT INTO bilety (cena, znizka, wagon,  miejsce, data_godzina_waznosci, data_godzina_zakupu, postoj_początkowy_id, postoj_koncowy_id)
VALUES (99.99, 'NORMALNY', 1, 12, '2024-06-07 10:00:00', '2024-06-06 12:00:00', 1, 2);

INSERT INTO bilety (cena, znizka, wagon, miejsce, data_godzina_waznosci, data_godzina_zakupu, postoj_początkowy_id, postoj_koncowy_id)
VALUES (59.99,'STUDENT/51%',2, 15, '2024-06-07 13:00:00', '2024-06-06 14:00:00', 3, 4);

INSERT INTO bilety (cena, znizka, wagon, miejsce, data_godzina_waznosci, data_godzina_zakupu, postoj_początkowy_id, postoj_koncowy_id)
VALUES (120.00, 'NORMALNY', 3, 10, '2024-06-07 10:00:00', '2024-06-06 16:00:00', 1, 2);
