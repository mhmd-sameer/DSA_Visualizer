package com.example.dsa.Model;

import java.util.List;

public class Step {

    private List<Integer> array;
    private String action;
    private int i;
    private int j;
    private String explanation;

    public Step(List<Integer> array,String action,int i,int j,String explanation)
    {
        this.array = array;
        this.action = action;
        this.i = i;
        this.j = j;
        this.explanation = explanation;
    }

    public List<Integer> getArray() {
        return array;
    }

    public void setArray(List<Integer> array) {
        this.array = array;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public int getI() {
        return i;
    }

    public void setI(int i) {
        this.i = i;
    }

    public int getJ() {
        return j;
    }

    public void setJ(int j) {
        this.j = j;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }
}
