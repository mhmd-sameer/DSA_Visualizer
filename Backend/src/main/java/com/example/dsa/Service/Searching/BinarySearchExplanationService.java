package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

@Service
public class BinarySearchExplanationService{
    public String start(int target) {
        return "We begin binary search for the target value " + target +
                " in a sorted array.";
    }

    public String mid(int midIndex, int midValue) {
        return "We check the middle element " + midValue +
                " at index " + midIndex + ".";
    }

    public String moveLeft(int target, int midValue) {
        return "Since the target value " + target +
                " is smaller than " + midValue +
                ", we continue searching in the left half of the array.";
    }

    public String moveRight(int target, int midValue) {
        return "Since the target value " + target +
                " is greater than " + midValue +
                ", we continue searching in the right half of the array.";
    }

    public String found(int target, int index) {
        return "The target value " + target +
                " is found at index " + index + ".";
    }

    public String doneNotFound(int target) {
        return "The search space is empty. The target value " + target +
                " does not exist in the array.";
    }
}