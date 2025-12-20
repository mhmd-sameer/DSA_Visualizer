package com.example.dsa.Controller;

import com.example.dsa.Model.SearchRequest;
import com.example.dsa.Model.Step;
import com.example.dsa.Service.BubbleSortService;
import com.example.dsa.Service.InsertionSortService;
import com.example.dsa.Service.LinearSearchService;
import com.example.dsa.Service.SelectionSortService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/algorithm")
@CrossOrigin(origins="*")
public class AlgorithmController {

    private final BubbleSortService bubbleSortService;
    private final SelectionSortService selectionSortService;
    private final InsertionSortService insertionSortService;
    private final LinearSearchService linearSearchService;

    public AlgorithmController(BubbleSortService bubbleSortService,
                               SelectionSortService selectionSortService,
                               InsertionSortService insertionSortService,
                               LinearSearchService linearSearchService)
    {
        this.bubbleSortService = bubbleSortService;
        this.selectionSortService = selectionSortService;
        this.insertionSortService = insertionSortService;
        this.linearSearchService = linearSearchService;
    }

    @PostMapping("/bubble-sort")
    public List<Step> bubbleSort(@RequestBody List<Integer> input)
    {
        return bubbleSortService.generateSteps(input);
    }

    @PostMapping("/selection-sort")
    public List<Step> selectionSort(@RequestBody List<Integer> input)
    {
        return selectionSortService.generateSteps(input);
    }

    @PostMapping("/insertion-sort")
    public List<Step> insertionSort(@RequestBody List<Integer> input)
    {
        return insertionSortService.generateSteps(input);
    }

    @PostMapping("/linear-search")
    public List<Step> linearSearch(@RequestBody SearchRequest request)
    {
        return linearSearchService.generateSteps(request);
    }

    @PostMapping("/binary-search")
    public List<Step> binarySearch(@RequestBody SearchRequest request)
    {
        return linearSearchService.generateSteps(request);
    }
}
