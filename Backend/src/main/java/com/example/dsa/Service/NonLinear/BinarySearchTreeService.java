package com.example.dsa.Service;

import com.example.dsa.Model.BinarySearchTreeRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BinarySearchTreeService {

    // index-based BST (array representation)

    public List<Step> insert(BinarySearchTreeRequest request) {
        List<Integer> tree = new ArrayList<>(request.getTree());
        List<Step> steps = new ArrayList<>();

        int value = request.getValue();

        if (tree.isEmpty()) {
            tree.add(value);
            steps.add(step(tree, 0, "Inserted root " + value));
            return steps;
        }

        int i = 0;
        while (i < tree.size()) {
            steps.add(step(tree, i, "Comparing with " + tree.get(i)));

            if (value < tree.get(i)) {
                int left = 2 * i + 1;
                if (left >= tree.size()) {
                    expand(tree, left);
                    tree.set(left, value);
                    steps.add(step(tree, left, "Inserted " + value));
                    break;
                }
                i = left;
            } else {
                int right = 2 * i + 2;
                if (right >= tree.size()) {
                    expand(tree, right);
                    tree.set(right, value);
                    steps.add(step(tree, right, "Inserted " + value));
                    break;
                }
                i = right;
            }
        }

        return steps;
    }

    public List<Step> search(BinarySearchTreeRequest request) {
        List<Integer> tree = request.getTree();
        List<Step> steps = new ArrayList<>();
        int target = request.getValue();

        int i = 0;
        while (i < tree.size() && tree.get(i) != null) {
            steps.add(step(tree, i, "Visiting " + tree.get(i)));

            if (tree.get(i) == target) {
                steps.add(step(tree, i, "Found " + target));
                break;
            }

            if (target < tree.get(i)) {
                i = 2 * i + 1;
            } else {
                i = 2 * i + 2;
            }
        }

        return steps;
    }

    private Step step(List<Integer> tree, int index, String msg) {
        return new Step(new ArrayList<>(tree), "visit", index, -1, msg);
    }

    private void expand(List<Integer> tree, int index) {
        while (tree.size() <= index) tree.add(null);
    }
}
