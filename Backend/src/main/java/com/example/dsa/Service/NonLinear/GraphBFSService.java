package com.example.dsa.Service;

import com.example.dsa.Model.GraphRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GraphBFSService {

    public List<Step> bfs(GraphRequest request) {

        Map<Integer, List<Integer>> graph = request.getGraph();
        int start = request.getStart();

        List<Step> steps = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();

        queue.offer(start);
        steps.add(step(start, "in-queue", "Added " + start + " to queue"));

        while (!queue.isEmpty()) {
            int node = queue.poll();

            steps.add(step(node, "current", "Visiting node " + node));

            if (visited.contains(node)) continue;

            visited.add(node);
            steps.add(step(node, "visited", "Marked " + node + " as visited"));

            for (int neighbor : graph.getOrDefault(node, List.of())) {
                if (!visited.contains(neighbor)) {
                    queue.offer(neighbor);
                    steps.add(step(neighbor, "in-queue",
                            "Added neighbor " + neighbor + " to queue"));
                }
            }
        }

        return steps;
    }

    private Step step(int node, String action, String msg) {
        return new Step(null, action, node, -1, msg);
    }
}
