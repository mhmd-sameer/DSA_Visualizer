package com.example.dsa.Controller;

import com.example.dsa.Model.StackRequest;
import com.example.dsa.Model.SearchRequest;
import com.example.dsa.Model.Step;
import com.example.dsa.Service.BubbleSortService;
import com.example.dsa.Service.InsertionSortService;
import com.example.dsa.Service.MergeSortService;
import com.example.dsa.Service.QuickSortService;
import com.example.dsa.Service.LinearSearchService;
import com.example.dsa.Service.SelectionSortService;
import com.example.dsa.Service.BinarySearchService;
import com.example.dsa.Service.StackService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/algorithm")
@CrossOrigin(origins="*")
public class AlgorithmController {

    private final BubbleSortService bubbleSortService;
    private final SelectionSortService selectionSortService;
    private final InsertionSortService insertionSortService;
    private final MergeSortService mergeSortService;
    private final QuickSortService quickSortService;
    private final LinearSearchService linearSearchService;
    private final BinarySearchService binarySearchService;
    private final StackService stackService;

    public AlgorithmController(BubbleSortService bubbleSortService,
                               SelectionSortService selectionSortService,
                               InsertionSortService insertionSortService,
                               MergeSortService mergeSortService,
                               QuickSortService quickSortService,
                               LinearSearchService linearSearchService,
                               BinarySearchService binarySearchService,
                               StackService stackService)
    {
        this.bubbleSortService = bubbleSortService;
        this.selectionSortService = selectionSortService;
        this.insertionSortService = insertionSortService;
        this.mergeSortService = mergeSortService;
        this.quickSortService = quickSortService;
        this.linearSearchService = linearSearchService;
        this.binarySearchService = binarySearchService;
        this.stackService = stackService;
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

    @PostMapping("/merge-sort")
    public List<Step> mergeSort(@RequestBody List<Integer> input)
    {
        return mergeSortService.generateSteps(input);
    }

    @PostMapping("/quick-sort")
    public List<Step> quickSort(@RequestBody List<Integer> input)
    {
        return quickSortService.generateSteps(input);
    }

    @PostMapping("/linear-search")
    public List<Step> linearSearch(@RequestBody SearchRequest request)
    {
        return linearSearchService.generateSteps(request);
    }

    @PostMapping("/binary-search")
    public List<Step> binarySearch(@RequestBody SearchRequest request)
    {
        return binarySearchService.generateSteps(request);
    }

}
