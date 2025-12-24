package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LinkedListService {

    private final LinkedListExplanationService explanation;

    public LinkedListService(LinkedListExplanationService explanation) {
        this.explanation = explanation;
    }

    // INSERT AT HEAD (O(1))
    public List<Step> insertAtHead(List<Integer> list, int value) {

        List<Step> steps = new ArrayList<>();

        list.add(0, value);

        steps.add(new Step(
                new ArrayList<>(list),
                "insert_head",
                0,
                -1,
                explanation.insertHead(value)
        ));

        return steps;
    }

    // INSERT AT TAIL (O(n) without tail pointer)
    public List<Step> insertAtTail(List<Integer> list, int value) {

        List<Step> steps = new ArrayList<>();

        list.add(value);

        steps.add(new Step(
                new ArrayList<>(list),
                "insert_tail",
                list.size() - 1,
                -1,
                explanation.insertTail(value)
        ));

        return steps;
    }

    // DELETE AT POSITION
    public List<Step> deleteAtPosition(List<Integer> list, int pos) {

        List<Step> steps = new ArrayList<>();

        if (list.isEmpty() || pos < 0 || pos >= list.size()) {
            steps.add(new Step(
                    new ArrayList<>(list),
                    "invalid",
                    -1,
                    -1,
                    explanation.invalid()
            ));
            return steps;
        }

        int deleted = list.remove(pos);

        steps.add(new Step(
                new ArrayList<>(list),
                "delete",
                pos,
                -1,
                explanation.delete(deleted, pos)
        ));

        return steps;
    }

    // SEARCH (O(n))
    public List<Step> search(List<Integer> list, int target) {

        List<Step> steps = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {

            steps.add(new Step(
                    new ArrayList<>(list),
                    "search",
                    i,
                    -1,
                    explanation.searchCheck(list.get(i), i)
            ));

            if (list.get(i) == target) {
                steps.add(new Step(
                        new ArrayList<>(list),
                        "found",
                        i,
                        -1,
                        explanation.searchFound(target, i)
                ));
                return steps;
            }
        }

        steps.add(new Step(
                new ArrayList<>(list),
                "not_found",
                -1,
                -1,
                explanation.searchNotFound(target)
        ));

        return steps;
    }
}
