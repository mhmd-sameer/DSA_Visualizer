package com.example.dsa.Service;

import com.example.dsa.Model.GraphRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GraphDFSService {

    private final GraphExplanationService explanationService;

    public GraphDFSService(GraphExplanationService explanationService) {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(GraphRequest request) {

        Map<Integer, List<Integer>> graph = request.getGraph();
        int start = request.getStart();

        List<Step> steps = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();
        Stack<Integer> stack = new Stack<>();

        dfs(start, graph, visited, stack, steps);

        return steps;
    }

    private void dfs(
            int node,
            Map<Integer, List<Integer>> graph,
            Set<Integer> visited,
            Stack<Integer> stack,
            List<Step> steps
    ) {
        stack.push(node);

        steps.add(new Step(
                new ArrayList<>(),                // graph not array-based
                "push",
                node,
                new ArrayList<>(stack),
                explanationService.push(node)
        ));

        if (visited.contains(node)) return;

        visited.add(node);

        steps.add(new Step(
                new ArrayList<>(),
                "visit",
                node,
                new ArrayList<>(stack),
                explanationService.visit(node)
        ));

        for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
            if (!visited.contains(neighbor)) {
                dfs(neighbor, graph, visited, stack, steps);
            }
        }

        stack.pop();

        steps.add(new Step(
                new ArrayList<>(),
                "pop",
                node,
                new ArrayList<>(stack),
                explanationService.pop(node)
        ));
    }
}
