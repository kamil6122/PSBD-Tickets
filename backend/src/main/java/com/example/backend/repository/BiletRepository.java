package com.example.backend.repository;

import com.example.backend.model.Bilet;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BiletRepository extends JpaRepository<Bilet, Long>{
    Bilet findFirstById(Long id);
    @NonNull List<Bilet> findAll();
}
