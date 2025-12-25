package com.example.dsa.Controller;

import com.example.dsa.Model.GraphRequest;
import com.example.dsa.Model.Step;
import com.example.dsa.Service.GraphBFSService;
import com.example.dsa.Service.GraphDFSService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/algorithm/graph")
@CrossOrigin("*")
public class GraphController {

    private final GraphBFSService bfsService;
    private final GraphDFSService dfsService;

    public GraphController(GraphBFSService bfsService, GraphDFSService dfsService) {
        this.bfsService = bfsService;
        this.dfsService = dfsService;
    }

    @PostMapping("/bfs")
    public List<Step> bfs(@RequestBody GraphRequest request) {
        return bfsService.bfs(request);
    }
    @PostMapping("/dfs")
    public List<Step> dfs(@RequestBody GraphRequest request) {
        return dfsService.generateSteps(request);
    }
}
