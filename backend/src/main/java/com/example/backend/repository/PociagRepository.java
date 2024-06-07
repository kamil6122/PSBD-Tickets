package com.example.backend.repository;


import com.example.backend.model.Pociag;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PociagRepository extends JpaRepository<Pociag, String> {
    @Query("SELECT p FROM Pociag p WHERE p.numer_pociagu = ?1")
    Pociag findFirstByNumer_Pociagu(String numer_pociagu);
    @NonNull List<Pociag> findAll();
}
