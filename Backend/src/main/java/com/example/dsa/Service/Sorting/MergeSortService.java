package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MergeSortService {

    private final MergeSortExplanationService explanation;

    public MergeSortService(MergeSortExplanationService explanation) {
        this.explanation = explanation;
    }

    public List<Step> generateSteps(List<Integer> input) {
        List<Integer> arr = new ArrayList<>(input);
        List<Step> steps = new ArrayList<>();

        mergeSort(arr, 0, arr.size() - 1, steps);

        steps.add(new Step(
                new ArrayList<>(arr),
                "done",
                -1,
                -1,
                explanation.done()
        ));

        return steps;
    }

    private void mergeSort(List<Integer> arr, int left, int right, List<Step> steps) {
        if (left >= right) return;

        int mid = left + (right - left) / 2;

        steps.add(new Step(
                new ArrayList<>(arr),
                "divide",
                left,
                right,
                explanation.divide(left, right)
        ));

        mergeSort(arr, left, mid, steps);
        mergeSort(arr, mid + 1, right, steps);

        merge(arr, left, mid, right, steps);
    }

    private void merge(List<Integer> arr, int left, int mid, int right, List<Step> steps) {

        List<Integer> temp = new ArrayList<>();
        int i = left, j = mid + 1;

        while (i <= mid && j <= right) {
            steps.add(new Step(
                    new ArrayList<>(arr),
                    "compare",
                    i,
                    j,
                    explanation.compare(arr.get(i), arr.get(j))
            ));

            if (arr.get(i) <= arr.get(j)) {
                temp.add(arr.get(i++));
            } else {
                temp.add(arr.get(j++));
            }
        }

        while (i <= mid) temp.add(arr.get(i++));
        while (j <= right) temp.add(arr.get(j++));

        for (int k = 0; k < temp.size(); k++) {
            arr.set(left + k, temp.get(k));

            steps.add(new Step(
                    new ArrayList<>(arr),
                    "overwrite",
                    left + k,
                    -1,
                    explanation.overwrite(temp.get(k), left + k)
            ));
        }

        steps.add(new Step(
                new ArrayList<>(arr),
                "sorted",
                right,
                -1,
                explanation.sorted(left, right)
        ));
    }
}
