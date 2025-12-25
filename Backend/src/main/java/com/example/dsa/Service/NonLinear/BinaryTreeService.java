package com.example.dsa.Service;

import com.example.dsa.Model.BinaryTreeRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class BinaryTreeService {

    private final List<Integer> tree = List.of(1, 2, 3, 4, 5, 6, 7);
    private final List<Step> steps = new ArrayList<>();

    // index-based tree
    // left = 2*i + 1, right = 2*i + 2

    public List<Step> inorder() {
        steps.clear();
        inorderDFS(0);
        return steps;
    }

    public List<Step> preorder() {
        steps.clear();
        preorderDFS(0);
        return steps;
    }

    public List<Step> postorder() {
        steps.clear();
        postorderDFS(0);
        return steps;
    }

    private void inorderDFS(int i) {
        if (i >= tree.size()) return;

        inorderDFS(2 * i + 1);

        steps.add(new Step(tree, "visit", i, -1,
                "Visited node " + tree.get(i)));

        inorderDFS(2 * i + 2);
    }

    private void preorderDFS(int i) {
        if (i >= tree.size()) return;

        steps.add(new Step(tree, "visit", i, -1,
                "Visited node " + tree.get(i)));

        preorderDFS(2 * i + 1);
        preorderDFS(2 * i + 2);
    }

    private void postorderDFS(int i) {
        if (i >= tree.size()) return;

        postorderDFS(2 * i + 1);
        postorderDFS(2 * i + 2);

        steps.add(new Step(tree, "visit", i, -1,
                "Visited node " + tree.get(i)));
    }
}
