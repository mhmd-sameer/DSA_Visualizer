package com.example.dsa.Model;

import java.util.Map;
import java.util.List;

public class GraphRequest {

    private Map<Integer, List<Integer>> graph;
    private int start;

    public Map<Integer, List<Integer>> getGraph() {
        return graph;
    }

    public void setGraph(Map<Integer, List<Integer>> graph) {
        this.graph = graph;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }
}
