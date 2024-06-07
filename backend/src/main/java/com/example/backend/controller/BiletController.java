package com.example.backend.controller;

import com.example.backend.service.BiletService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/bilety")
public class BiletController {
    private final BiletService biletService;


    @GetMapping
    public ResponseEntity<?> getAllTickets() {
        return ResponseEntity.ok(biletService.getAllBilety());
    }

    @GetMapping("/{biletID}")
    public ResponseEntity<?> getTicket(@PathVariable("biletID") Long biletID) {
        return ResponseEntity.ok(biletService.getBiletById(biletID));
    }
}
