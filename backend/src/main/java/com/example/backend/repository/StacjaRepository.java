package com.example.backend.repository;

import com.example.backend.model.Stacja;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StacjaRepository extends JpaRepository<Stacja, Long> {
    Stacja findFirstById(Long id);
    @NonNull List<Stacja> findAll();
}
