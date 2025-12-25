package com.example.dsa.Controller;

import com.example.dsa.Model.Step;
import com.example.dsa.Model.BinarySearchTreeRequest;
import com.example.dsa.Service.BinarySearchTreeService;

import org.springframework.web.bind.annotation.*; // 🔥 IMPORTANT

import java.util.List;

@RestController
@RequestMapping("/api/algorithm/bst")
@CrossOrigin("*")
public class BinarySearchTreeController {

    private final BinarySearchTreeService service;

    public BinarySearchTreeController(BinarySearchTreeService service) {
        this.service = service;
    }

    @PostMapping("/insert")
    public List<Step> insert(@RequestBody BinarySearchTreeRequest request) {
        return service.insert(request);
    }

    @PostMapping("/search")
    public List<Step> search(@RequestBody BinarySearchTreeRequest request) {
        return service.search(request);
    }
}
