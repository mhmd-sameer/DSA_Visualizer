package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

@Service
public class BubbleSortExplanationService {

    public String compare(int a, int b) {
        if (a <= b) {
            return "We compare " + a + " and " + b +
                    ". Since " + a + " is smaller than " + b +
                    ", they are already in the correct order.";
        } else {
            return "We compare " + a + " and " + b +
                    ". Since " + a + " is greater than " + b +
                    ", they need to be swapped.";
        }
    }

    public String swap(int a, int b) {
        return "We swap " + a + " and " + b +
                " to move the larger value towards the end of the array.";
    }

    public String sorted(int value) {
        return "The value " + value +
                " has reached its correct position and is now sorted.";
    }

    public String done() {
        return "The array is now fully sorted. Bubble Sort is complete.";
    }

    public String check(int a, int b) {
        return "Checking the element " + a + " to the target " + b + " .";
    }

    public String found(int a, int b) {
        return "Target " + a + " found at the index " + b + " .";
    }

    public String notFound(int a) {
        return "Target " + a + "is not found.";
    }
}

