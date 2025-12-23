package com.example.dsa.Controller;

import com.example.dsa.Model.QueueRequest;
import com.example.dsa.Model.Step;
import com.example.dsa.Service.QueueService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/algorithm/queue")
@CrossOrigin(origins = "*")
public class QueueController {

    private final QueueService queueService;

    public QueueController(QueueService queueService) {
        this.queueService = queueService;
    }

    @PostMapping("/enqueue")
    public List<Step> enqueue(@RequestBody QueueRequest request) {
        return queueService.enqueue(request.getQueue(), request.getValue());
    }

    @PostMapping("/dequeue")
    public List<Step> dequeue(@RequestBody QueueRequest request) {
        return queueService.dequeue(request.getQueue());
    }
}
