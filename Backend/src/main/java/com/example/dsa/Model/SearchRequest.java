package com.example.dsa.Model;

import java.util.ArrayList;

public class SearchRequest {
    private ArrayList<Integer> array;
    int target;

    public ArrayList<Integer> getArray() {
        return array;
    }

    public void setArray(ArrayList<Integer> array) {
        this.array = array;
    }

    public int getTarget() {
        return target;
    }

    public void setTarget(int target) {
        this.target = target;
    }
}
