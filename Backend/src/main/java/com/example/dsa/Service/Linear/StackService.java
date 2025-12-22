package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StackService {

    private final StackExplanationService explanationService;

    public StackService(StackExplanationService explanationService) {
        this.explanationService = explanationService;
    }

    // 🔼 PUSH
    public List<Step> push(List<Integer> stack, int value) {

        List<Step> steps = new ArrayList<>();

        // start
        steps.add(new Step(
                new ArrayList<>(stack),
                "start",
                -1,
                -1,
                explanationService.start("push", value)
        ));

        // push
        stack.add(value);
        steps.add(new Step(
                new ArrayList<>(stack),
                "push",
                stack.size() - 1,
                -1,
                explanationService.push(value)
        ));

        // done
        steps.add(new Step(
                new ArrayList<>(stack),
                "done",
                -1,
                -1,
                "Push operation completed."
        ));

        return steps;
    }

    // 🔽 POP
    public List<Step> pop(List<Integer> stack) {

        List<Step> steps = new ArrayList<>();

        steps.add(new Step(
                new ArrayList<>(stack),
                "start",
                -1,
                -1,
                explanationService.start("pop", null)
        ));

        if (stack.isEmpty()) {
            steps.add(new Step(
                    new ArrayList<>(stack),
                    "invalid",
                    -1,
                    -1,
                    explanationService.empty()
            ));

            steps.add(new Step(
                    new ArrayList<>(stack),
                    "done",
                    -1,
                    -1,
                    "Pop operation completed."
            ));

            return steps;
        }

        int popped = stack.remove(stack.size() - 1);

        steps.add(new Step(
                new ArrayList<>(stack),
                "pop",
                -1,
                -1,
                explanationService.pop(popped)
        ));

        steps.add(new Step(
                new ArrayList<>(stack),
                "done",
                -1,
                -1,
                "Pop operation completed."
        ));

        return steps;
    }

    // 👀 PEEK
    public List<Step> peek(List<Integer> stack) {

        List<Step> steps = new ArrayList<>();

        steps.add(new Step(
                new ArrayList<>(stack),
                "start",
                -1,
                -1,
                explanationService.start("peek", null)
        ));

        if (stack.isEmpty()) {
            steps.add(new Step(
                    new ArrayList<>(stack),
                    "invalid",
                    -1,
                    -1,
                    explanationService.empty()
            ));

            steps.add(new Step(
                    new ArrayList<>(stack),
                    "done",
                    -1,
                    -1,
                    "Peek operation completed."
            ));

            return steps;
        }

        int top = stack.get(stack.size() - 1);

        steps.add(new Step(
                new ArrayList<>(stack),
                "peek",
                stack.size() - 1,
                -1,
                explanationService.peek(top)
        ));

        steps.add(new Step(
                new ArrayList<>(stack),
                "done",
                -1,
                -1,
                "Peek operation completed."
        ));

        return steps;
    }
}
