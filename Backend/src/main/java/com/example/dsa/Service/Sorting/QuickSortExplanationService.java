
package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

@Service
public class QuickSortExplanationService {

    public String pivot(int pivot) {
        return "Choosing " + pivot + " as the pivot element.";
    }

    public String compare(int a, int pivot) {
        return "Comparing " + a + " with pivot " + pivot + ".";
    }

    public String swap(int a, int b) {
        return "Swapping " + a + " and " + b + ".";
    }

    public String pivotPlaced(int value) {
        return "Pivot " + value + " is now in its correct position.";
    }

    public String done() {
        return "Quick Sort completed. The array is fully sorted.";
    }
}
