package com.example.dsa.Service;

import org.springframework.stereotype.Service;

@Service
public class LinkedListExplanationService {

    public String insertHead(int value) {
        return "Inserted " + value + " at the head of the linked list.";
    }

    public String insertTail(int value) {
        return "Inserted " + value + " at the tail of the linked list.";
    }

    public String delete(int value, int pos) {
        return "Deleted node with value " + value + " from position " + pos + ".";
    }

    public String searchCheck(int value, int pos) {
        return "Checking node at position " + pos + " with value " + value + ".";
    }

    public String searchFound(int value, int pos) {
        return "Value " + value + " found at position " + pos + ".";
    }

    public String searchNotFound(int value) {
        return "Value " + value + " not found in the linked list.";
    }

    public String invalid() {
        return "Invalid operation on linked list.";
    }
}
