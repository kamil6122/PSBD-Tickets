package com.example.backend.repository;

import com.example.backend.model.Kurs;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KursRepository extends JpaRepository<Kurs, Long> {
    Kurs findFirstById(Long id);
    @NonNull List<Kurs> findAll();
}
