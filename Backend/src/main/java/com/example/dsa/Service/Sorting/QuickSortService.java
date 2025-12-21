package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuickSortService {

    private final QuickSortExplanationService explanation;

    public QuickSortService(QuickSortExplanationService explanation) {
        this.explanation = explanation;
    }

    public List<Step> generateSteps(List<Integer> input) {
        List<Integer> arr = new ArrayList<>(input);
        List<Step> steps = new ArrayList<>();

        quickSort(arr, 0, arr.size() - 1, steps);

        steps.add(new Step(
                new ArrayList<>(arr),
                "done",
                -1,
                -1,
                explanation.done()
        ));

        return steps;
    }

    private void quickSort(List<Integer> arr, int low, int high, List<Step> steps) {
        if (low >= high) return;

        int pivotIndex = partition(arr, low, high, steps);

        // Left of pivot
        quickSort(arr, low, pivotIndex - 1, steps);

        // Right of pivot
        quickSort(arr, pivotIndex + 1, high, steps);
    }

    private int partition(List<Integer> arr, int low, int high, List<Step> steps) {

        int pivot = arr.get(high);

        // 🔸 Pivot chosen
        steps.add(new Step(
                new ArrayList<>(arr),
                "pivot",
                high,
                -1,
                explanation.pivot(pivot)
        ));

        int i = low - 1;

        for (int j = low; j < high; j++) {

            steps.add(new Step(
                    new ArrayList<>(arr),
                    "compare",
                    j,
                    high,
                    explanation.compare(arr.get(j), pivot)
            ));

            if (arr.get(j) < pivot) {
                i++;

                // swap arr[i] and arr[j]
                int temp = arr.get(i);
                arr.set(i, arr.get(j));
                arr.set(j, temp);

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "swap",
                        i,
                        j,
                        explanation.swap(arr.get(i), arr.get(j))
                ));
            }
        }

        // Place pivot in correct position
        int temp = arr.get(i + 1);
        arr.set(i + 1, arr.get(high));
        arr.set(high, temp);

        steps.add(new Step(
                new ArrayList<>(arr),
                "sorted",
                i + 1,
                -1,
                explanation.pivotPlaced(arr.get(i + 1))
        ));

        return i + 1;
    }
}
