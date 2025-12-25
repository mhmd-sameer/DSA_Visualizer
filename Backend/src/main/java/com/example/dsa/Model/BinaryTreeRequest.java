package com.example.dsa.Model;

import java.util.List;

public class BinaryTreeRequest {

    private List<Integer> tree;
    private String traversalType; // inorder / preorder / postorder
    private Integer searchValue;

    public List<Integer> getTree() {
        return tree;
    }

    public void setTree(List<Integer> tree) {
        this.tree = tree;
    }

    public String getTraversalType() {
        return traversalType;
    }

    public void setTraversalType(String traversalType) {
        this.traversalType = traversalType;
    }

    public Integer getSearchValue() {
        return searchValue;
    }

    public void setSearchValue(Integer searchValue) {
        this.searchValue = searchValue;
    }
}
