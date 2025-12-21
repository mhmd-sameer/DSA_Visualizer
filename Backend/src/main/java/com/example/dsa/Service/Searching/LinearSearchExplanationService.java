package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

@Service
public class LinearSearchExplanationService{
    public String start(int target) {
        return "We start searching for the target value " + target +
                " by checking each element one by one from the beginning.";
    }

    public String compare(int current, int index) {
        return "We check the element " + current +
                " at index " + index +
                " to see if it matches the target.";
    }

    public String found(int target, int index) {
        return "The target value " + target +
                " is found at index " + index + ".";
    }

    public String notFound(int current) {
        return current +
                " does not match the target, so we move to the next element.";
    }

    public String doneNotFound(int target) {
        return "We have checked all elements and the target value " + target +
                " was not found in the array.";
    }
}