package com.example.backend.service;

import com.example.backend.model.Bilet;
import com.example.backend.repository.BiletRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BiletService {
    private final BiletRepository biletRepository;

    public BiletService(BiletRepository biletRepository) {
        this.biletRepository = biletRepository;
    }


    public Bilet getBiletById(Long id) {
        return biletRepository.findById(id).orElseThrow(() -> new RuntimeException("Bilet not found"));
    }

    public List<Bilet> getAllBilety() {
        return biletRepository.findAll();
    }


}
