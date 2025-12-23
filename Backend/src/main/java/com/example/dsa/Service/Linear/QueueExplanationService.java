package com.example.dsa.Service;

import org.springframework.stereotype.Service;

@Service
public class QueueExplanationService {

    public String enqueue(int value) {
        return "Enqueued " + value + " to the rear of the queue.";
    }

    public String dequeue(int value) {
        return "Dequeued " + value + " from the front of the queue.";
    }

    public String empty() {
        return "Queue is empty. Dequeue operation cannot be performed.";
    }
}
