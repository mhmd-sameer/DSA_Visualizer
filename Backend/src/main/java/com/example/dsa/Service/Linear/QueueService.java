package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QueueService {

    private final QueueExplanationService explanation;

    public QueueService(QueueExplanationService explanation) {
        this.explanation = explanation;
    }

    // ENQUEUE: add element to rear
    public List<Step> enqueue(List<Integer> queue, int input) {

        List<Step> steps = new ArrayList<>();

        queue.add(input);

        steps.add(new Step(
                new ArrayList<>(queue),
                "enqueue",
                queue.size() - 1,   // rear index
                -1,
                explanation.enqueue(input)
        ));

        return steps;
    }

    // DEQUEUE: remove element from front
    public List<Step> dequeue(List<Integer> queue) {

        List<Step> steps = new ArrayList<>();

        if (queue.isEmpty()) {
            steps.add(new Step(
                    new ArrayList<>(queue),
                    "invalid",
                    -1,
                    -1,
                    explanation.empty()
            ));
            return steps;
        }

        int removed = queue.remove(0);

        steps.add(new Step(
                new ArrayList<>(queue),
                "dequeue",
                0,     // front index after removal
                -1,
                explanation.dequeue(removed)
        ));

        return steps;
    }
}
