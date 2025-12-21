package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InsertionSortService {

    private final InsertionSortExplanationService explanationService;

    public InsertionSortService(InsertionSortExplanationService explanationService) {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(List<Integer> input) {

        List<Integer> arr = new ArrayList<>(input);
        List<Step> steps = new ArrayList<>();

        int n = arr.size();
        // First element is always sorted in insertion sort
        steps.add(new Step(
                new ArrayList<>(arr),
                "sorted",
                0,
                -1,
                "The first element is considered sorted."
        ));

        for (int i = 1; i < n; i++) {

            int key = arr.get(i);
            int j = i - 1;

            // Select key
            steps.add(new Step(
                    new ArrayList<>(arr),
                    "select",
                    i,
                    -1,
                    explanationService.selectKey(key, i)
            ));

            // Shift elements
            while (j >= 0 && arr.get(j) > key) {

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "compare",
                        j,
                        j + 1,
                        explanationService.compare(key, arr.get(j))
                ));

                arr.set(j + 1, arr.get(j));

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "shift",
                        j,
                        j + 1,
                        explanationService.shift(arr.get(j))
                ));

                j--;
            }

            // Insert key
            arr.set(j + 1, key);

            steps.add(new Step(
                    new ArrayList<>(arr),
                    "insert",
                    j + 1,
                    -1,
                    explanationService.insert(key, j + 1)
            ));

            // Mark left side sorted
            steps.add(new Step(
                    new ArrayList<>(arr),
                    "sorted",
                    i,
                    -1,
                    explanationService.sorted(i)
            ));
        }

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
