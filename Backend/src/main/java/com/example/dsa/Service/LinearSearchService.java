package com.example.dsa.Service;

import com.example.dsa.Model.SearchRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LinearSearchService {
    private final ExplanationService explanationService;

    public LinearSearchService(ExplanationService explanationService)
    {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(SearchRequest request)
    {
        List<Integer> arr = request.getArray();
        int target = request.getTarget();
        List<Step> steps = new ArrayList<>();

        for(int i=0;i<arr.size();i++)
        {
            steps.add(new Step(arr,"check",arr.get(i),target,explanationService.check(arr.get(i),target)));
            if(arr.get(i)==target)
            {
                steps.add(new Step(arr,"found",i,target,explanationService.found(arr.get(i),target)));
                return steps;
            }
        }
        steps.add(new Step(arr,"not Found",target,-1,explanationService.notFound(target)));
        return steps;
    }
}
