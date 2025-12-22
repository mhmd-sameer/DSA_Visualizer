package com.example.dsa.Controller;

import com.example.dsa.Model.StackRequest;
import com.example.dsa.Model.Step;
import com.example.dsa.Service.StackService;
import org.springframework.web.bind.annotation.*;

import java.util.List;   // 🔴 THIS WAS MISSING

@RestController
@RequestMapping("/api/algorithm/stack")
@CrossOrigin(origins = "*")
public class StackController {

    private final StackService stackService;

    public StackController(StackService stackService) {
        this.stackService = stackService;
    }

    @PostMapping("/push")
    public List<Step> push(@RequestBody StackRequest request) {
        return stackService.push(request.getStack(), request.getValue());
    }

    @PostMapping("/pop")
    public List<Step> pop(@RequestBody StackRequest request) {
        return stackService.pop(request.getStack());
    }

    @PostMapping("/peek")
    public List<Step> peek(@RequestBody StackRequest request) {
        return stackService.peek(request.getStack());
    }
}
