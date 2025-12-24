package com.example.dsa.Controller;

import com.example.dsa.Model.LinkedListRequest;
import com.example.dsa.Model.Step;
import com.example.dsa.Service.LinkedListService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/algorithm/linked-list")
@CrossOrigin(origins = "*")
public class LinkedListController {

    private final LinkedListService linkedListService;

    public LinkedListController(LinkedListService linkedListService) {
        this.linkedListService = linkedListService;
    }

    // INSERT AT HEAD
    @PostMapping("/insert-head")
    public List<Step> insertAtHead(@RequestBody LinkedListRequest request) {
        return linkedListService.insertAtHead(
                request.getList(),
                request.getValue()
        );
    }

    // INSERT AT TAIL
    @PostMapping("/insert-tail")
    public List<Step> insertAtTail(@RequestBody LinkedListRequest request) {
        return linkedListService.insertAtTail(
                request.getList(),
                request.getValue()
        );
    }

    // DELETE AT POSITION
    @PostMapping("/delete")
    public List<Step> deleteAtPosition(@RequestBody LinkedListRequest request) {
        return linkedListService.deleteAtPosition(
                request.getList(),
                request.getPosition()
        );
    }

    // SEARCH
    @PostMapping("/search")
    public List<Step> search(@RequestBody LinkedListRequest request) {
        return linkedListService.search(
                request.getList(),
                request.getValue()
        );
    }
}
