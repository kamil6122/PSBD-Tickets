package com.example.backend.repository;

import com.example.backend.model.Przewoznik;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrzewoznikRepository extends JpaRepository<Przewoznik, Long> {
    Przewoznik findFirstById(Long id);
    @NonNull List<Przewoznik> findAll();
}
