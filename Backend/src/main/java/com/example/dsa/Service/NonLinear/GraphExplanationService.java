package com.example.dsa.Service;

import org.springframework.stereotype.Service;

@Service
public class GraphExplanationService {

    public String push(int node) {
        return "Push node " + node + " to stack";
    }

    public String visit(int node) {
        return "Visit node " + node;
    }

    public String pop(int node) {
        return "Backtrack from node " + node;
    }
}
