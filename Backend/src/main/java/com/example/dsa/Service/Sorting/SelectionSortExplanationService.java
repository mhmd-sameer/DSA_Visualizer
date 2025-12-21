package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

@Service
public class SelectionSortExplanationService {

    public String startPass(int index) {
        return "We start a new pass from index " + index +
                ", assuming this element is the smallest.";
    }

    public String compare(int currentMin, int candidate) {
        return "We compare the current minimum value " + currentMin +
                " with " + candidate + " to find the smaller element.";
    }

    public String newMinimum(int value) {
        return value + " is smaller, so we update the minimum value.";
    }

    public String swap(int min, int first) {
        return "We swap " + min +
                " with the first unsorted element to place the smallest value in its correct position.";
    }

    public String sorted(int value) {
        return value + " is now in its correct position and is marked as sorted.";
    }

    public String done() {
        return "All elements are sorted. Selection Sort is complete.";
    }
}
