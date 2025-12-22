package com.example.dsa.Model;

import java.util.List;

public class StackRequest {

    private List<Integer> stack; // current stack state
    private Integer value;       // value to push (null for pop)

    public List<Integer> getStack() {
        return stack;
    }

    public void setStack(List<Integer> stack) {
        this.stack = stack;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }
}
