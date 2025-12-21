package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

@Service
public class MergeSortExplanationService {

    public String divide(int left, int right) {
        return "Dividing array from index " + left + " to " + right;
    }

    public String compare(int a, int b) {
        return "Comparing " + a + " and " + b;
    }

    public String overwrite(int value, int index) {
        return "Placing " + value + " at position " + index;
    }

    public String sorted(int left, int right) {
        return "Subarray from index " + left + " to " + right + " is now sorted";
    }

    public String done() {
        return "Merge Sort completed. The array is fully sorted.";
    }
}
