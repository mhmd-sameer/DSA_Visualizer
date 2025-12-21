package com.example.dsa.Service;

import com.example.dsa.Model.SearchRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LinearSearchService {

    private final LinearSearchExplanationService explanationService;

    public LinearSearchService(LinearSearchExplanationService explanationService) {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(SearchRequest request) {

        List<Integer> arr = new ArrayList<>(request.getArray());
        int target = request.getTarget();

        List<Step> steps = new ArrayList<>();

        // 🔹 Start search
        steps.add(new Step(
                new ArrayList<>(arr),
                "start",
                -1,
                -1,
                explanationService.start(target)
        ));

        // 🔹 Linear search
        for (int i = 0; i < arr.size(); i++) {

            steps.add(new Step(
                    new ArrayList<>(arr),
                    "check",
                    i,
                    -1,
                    explanationService.compare(arr.get(i), i)
            ));

            if (arr.get(i) == target) {

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "found",
                        i,
                        -1,
                        explanationService.found(target, i)
                ));

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "done",
                        -1,
                        -1,
                        "Linear search completed."
                ));

                return steps;
            }
        }

        // 🔹 Not found
        steps.add(new Step(
                new ArrayList<>(arr),
                "not_found",
                -1,
                -1,
                explanationService.doneNotFound(target)
        ));

        steps.add(new Step(
                new ArrayList<>(arr),
                "done",
                -1,
                -1,
                "Linear search completed."
        ));

        return steps;
    }
}
