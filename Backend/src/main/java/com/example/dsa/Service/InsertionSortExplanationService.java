package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

@Service
public class InsertionSortExplanationService{
    public String selectKey(int value, int index) {
        return "We select " + value +
                " as the key element at index " + index +
                " to insert it into the sorted portion on the left.";
    }

    public String compare(int key, int compared) {
        return "We compare the key value " + key +
                " with " + compared +
                " to decide where the key should be inserted.";
    }

    public String shift(int value) {
        return value +
                " is greater than the key, so we shift it one position to the right.";
    }

    public String insert(int key, int position) {
        return "We insert the key value " + key +
                " into its correct position at index " + position + ".";
    }

    public String sorted(int index) {
        return "The subarray from index 0 to " + index +
                " is now sorted.";
    }

    public String done() {
        return "All elements have been inserted into their correct positions. Insertion Sort is complete.";
    }
}