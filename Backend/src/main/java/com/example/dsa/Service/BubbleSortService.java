package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class BubbleSortService {

    private final ExplanationService explanation;

    public BubbleSortService(ExplanationService explanation) {
        this.explanation = explanation;
    }

    public List<Step> generateSteps(List<Integer> input) {

        List<Integer> arr = new ArrayList<>(input);
        List<Step> steps = new ArrayList<>();

        int n = arr.size();

        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n - i - 1; j++) {

                // COMPARE STEP
                steps.add(new Step(
                        new ArrayList<>(arr),   // SNAPSHOT
                        "compare",
                        j,
                        j + 1,
                        explanation.compare(arr.get(j), arr.get(j + 1))
                ));

                if (arr.get(j) > arr.get(j + 1)) {

                    // SWAP
                    int temp = arr.get(j);
                    arr.set(j, arr.get(j + 1));
                    arr.set(j + 1, temp);

                    steps.add(new Step(
                            new ArrayList<>(arr),   // SNAPSHOT
                            "swap",
                            j,
                            j + 1,
                            explanation.swap(arr.get(j), arr.get(j + 1))
                    ));
                }
            }
            steps.add(new Step(
                    new ArrayList<>(arr),
                    "sorted",
                    n - i - 1,
                    -1,
                    "Element at position " + (n - i - 1) + " is now sorted"
            ));
        }
        // mark the first element as sorted
        steps.add(new Step(
                new ArrayList<>(arr),
                "sorted",
                0,
                -1,
                "First element is now sorted"
        ));

        // DONE STEP
        steps.add(new Step(
                new ArrayList<>(arr),
                "done",
                -1,
                -1,
                explanation.done()
        ));

        return steps;
    }
}
