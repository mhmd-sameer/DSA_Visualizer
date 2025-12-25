package com.example.dsa.Controller;

import com.example.dsa.Model.BinaryTreeRequest;
import com.example.dsa.Model.Step;
import com.example.dsa.Service.BinaryTreeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/algorithm/binary-tree")
@CrossOrigin("*")
public class BinaryTreeController {

    private final BinaryTreeService service;

    public BinaryTreeController(BinaryTreeService service) {
        this.service = service;
    }

    @GetMapping("/inorder")
    public List<Step> inorder() {
        return service.inorder();
    }

    @GetMapping("/preorder")
    public List<Step> preorder() {
        return service.preorder();
    }

    @GetMapping("/postorder")
    public List<Step> postorder() {
        return service.postorder();
    }
}
