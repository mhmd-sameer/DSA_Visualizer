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

        List<Step> steps = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();
        Stack<Integer> stack = new Stack<>();

        dfs(request.getStart(), request.getGraph(), visited, stack, steps);
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
                new ArrayList<>(),
                "push",
                node,
                -1,
                explanationService.push(node)
        ));

        if (visited.contains(node)) return;

        visited.add(node);
        steps.add(new Step(
                new ArrayList<>(),
                "visit",
                node,
                -1,
                explanationService.visit(node)
        ));

        for (int n : graph.getOrDefault(node, List.of())) {
            if (!visited.contains(n)) {
                dfs(n, graph, visited, stack, steps);
            }
        }

        stack.pop();
        steps.add(new Step(
                new ArrayList<>(),
                "pop",
                node,
                -1,
                explanationService.pop(node)
        ));
    }
}
