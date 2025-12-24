package com.example.dsa.Model;

import java.util.List;

public class LinkedListRequest {

    private List<Integer> list; // current linked list
    private Integer value;      // value to insert/search
    private Integer position;   // position for delete (optional)

    public List<Integer> getList() {
        return list;
    }

    public void setList(List<Integer> list) {
        this.list = list;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public Integer getPosition() {
        return position;
    }

    public void setPosition(Integer position) {
        this.position = position;
    }
}
