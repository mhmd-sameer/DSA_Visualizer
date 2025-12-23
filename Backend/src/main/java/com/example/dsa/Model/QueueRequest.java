package com.example.dsa.Model;

import java.util.List;

public class QueueRequest{
    private List<Integer> queue;
    private Integer value;

    public List<Integer> getQueue() {
        return queue;
    }

    public void setQueue(List<Integer> queue) {
        this.queue = queue;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer input) {
        this.value = value;
    }
}