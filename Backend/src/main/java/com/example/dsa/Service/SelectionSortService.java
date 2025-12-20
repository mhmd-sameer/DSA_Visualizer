package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SelectionSortService {

    private final ExplanationService explanationService;

    public SelectionSortService(ExplanationService explanationService) {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(List<Integer> input) {

        List<Integer> arr = new ArrayList<>(input);
        List<Step> steps = new ArrayList<>();

        int n = arr.size();

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;

            // Find minimum
            for (int j = i + 1; j < n; j++) {

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "compare",
                        minIndex,
                        j,
                        explanationService.compare(arr.get(minIndex), arr.get(j))
                ));

                if (arr.get(j) < arr.get(minIndex)) {
                    minIndex = j;
                }
            }

            // Swap min with i
            if (minIndex != i) {
                int temp = arr.get(i);
                arr.set(i, arr.get(minIndex));
                arr.set(minIndex, temp);

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "swap",
                        i,
                        minIndex,
                        explanationService.swap(arr.get(i), arr.get(minIndex))
                ));
            }

            // ⭐ LEFT side sorted
            steps.add(new Step(
                    new ArrayList<>(arr),
                    "sorted",
                    i,
                    -1,
                    "Minimum element placed at position " + i
            ));
        }

        // Last element
        steps.add(new Step(
                new ArrayList<>(arr),
                "sorted",
                n - 1,
                -1,
                "Last element is sorted"
        ));

        steps.add(new Step(
                new ArrayList<>(arr),
                "done",
                -1,
                -1,
                explanationService.done()
        ));

        return steps;
    }
}
