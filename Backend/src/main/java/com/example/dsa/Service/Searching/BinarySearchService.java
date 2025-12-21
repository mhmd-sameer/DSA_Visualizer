package com.example.dsa.Service;

import com.example.dsa.Model.SearchRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BinarySearchService {

    private final BinarySearchExplanationService explanationService;

    public BinarySearchService(BinarySearchExplanationService explanationService) {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(SearchRequest request) {

        List<Integer> arr = new ArrayList<>(request.getArray());
        int target = request.getTarget();
        List<Step> steps = new ArrayList<>();

        // 🔹 Validate sorted array
        if (!isSorted(arr)) {
            steps.add(new Step(
                    new ArrayList<>(arr),
                    "invalid",
                    -1,
                    -1,
                    "Binary Search requires the array to be sorted."
            ));
            return steps;
        }

        int left = 0;
        int right = arr.size() - 1;

        // 🔹 Start
        steps.add(new Step(
                new ArrayList<>(arr),
                "start",
                left,
                right,
                explanationService.start(target)
        ));

        // 🔹 Binary search loop
        while (left <= right) {

            int mid = left + (right - left) / 2;

            steps.add(new Step(
                    new ArrayList<>(arr),
                    "check",
                    mid,
                    -1,
                    explanationService.mid(mid, arr.get(mid))
            ));

            if (arr.get(mid) == target) {

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "found",
                        mid,
                        -1,
                        explanationService.found(target, mid)
                ));

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "done",
                        -1,
                        -1,
                        "Binary search completed."
                ));

                return steps;
            }

            if (arr.get(mid) < target) {

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "move_right",
                        mid,
                        right,
                        explanationService.moveRight(target, arr.get(mid))
                ));

                left = mid + 1;
            } else {

                steps.add(new Step(
                        new ArrayList<>(arr),
                        "move_left",
                        left,
                        mid,
                        explanationService.moveLeft(target, arr.get(mid))
                ));

                right = mid - 1;
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
                "Binary search completed."
        ));

        return steps;
    }

    private boolean isSorted(List<Integer> arr) {
        for (int i = 0; i < arr.size() - 1; i++) {
            if (arr.get(i) > arr.get(i + 1)) return false;
        }
        return true;
    }
}
