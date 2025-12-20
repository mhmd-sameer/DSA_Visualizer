package com.example.dsa.Service;

import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InsertionSortService {
    private final ExplanationService explanationService;

    public InsertionSortService(ExplanationService explanationService)
    {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(List<Integer> input)
    {
        List<Integer> arr = new ArrayList<>(input);
        List<Step> steps = new ArrayList<>();

        for(int i=1;i<arr.size();i++)
        {
            int j=i-1;
            int val = arr.get(j);

            while(j>0 && arr.get(j)>val)
            {
                steps.add(new Step(arr,"compare",arr.get(j-1),arr.get(j),explanationService.compare(arr.get(j-1),arr.get(j))));
                arr.set(j+1,arr.get(j));
                steps.add(new Step(arr,"swap",arr.get(j-1),arr.get(j),explanationService.swap(arr.get(j-1),arr.get(j))));
                j--;
            }
            arr.set(j+1,val);
        }
        steps.add(new Step(arr,"done",-1,-1,explanationService.done()));
        return steps;
    }
}
