package com.example.backend.repository;


import com.example.backend.model.Pociag;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PociagRepository extends JpaRepository<Pociag, String> {
    Pociag findFirstByNumer_pociagu(Long numer_pociagu);
    @NonNull List<Pociag> findAll();
}
