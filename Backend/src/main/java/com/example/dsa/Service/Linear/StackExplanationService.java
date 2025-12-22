package com.example.dsa.Service;

import org.springframework.stereotype.Service;

@Service
public class StackExplanationService {

    public String start(String operation, Integer value) {
        if ("push".equals(operation)) {
            return "Starting PUSH operation for value " + value + ".";
        }

        if ("pop".equals(operation)) {
            return "Starting POP operation.";
        }

        if ("peek".equals(operation)) {
            return "Starting PEEK operation.";
        }

        return "Starting stack operation.";
    }

    public String push(int value) {
        return "Pushed " + value + " onto the stack.";
    }

    public String pop(int value) {
        return "Popped " + value + " from the stack.";
    }

    public String peek(int value) {
        return "Top element of the stack is " + value + ".";
    }

    public String empty() {
        return "Stack is empty. Operation cannot be performed.";
    }
}
