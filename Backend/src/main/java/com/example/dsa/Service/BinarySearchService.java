package com.example.dsa.Service;

import com.example.dsa.Model.SearchRequest;
import com.example.dsa.Model.Step;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BinarySearchService {
    private final ExplanationService explanationService;

    public BinarySearchService(ExplanationService explanationService)
    {
        this.explanationService = explanationService;
    }

    public List<Step> generateSteps(SearchRequest request)
    {
        List<Integer> arr = request.getArray();
        int target = request.getTarget();
        List<Step> steps = new ArrayList<>();

        if(!SortedArray(arr))
        {
            steps.add(new Step(arr,"invalid",-1,-1,"Binry Search requires a sorted array"));
            return steps;
        }
        int left = 0, right = arr.size()-1;

        while(left<=right)
        {
            int mid = left+(right-left)/2;

            steps.add(new Step(arr,"check",arr.get(mid),target,explanationService.check(target,arr.get(mid))));
            if(arr.get(mid)==target)
            {
                return steps;
            }
            else if(arr.get(mid)<target)
            {
                left=mid+1;
            }
            else{
                right = mid-1;
            }
        }
        steps.add(new Step(arr,"not found",target,-1,explanationService.notFound(target)));
        return steps;
    }
    public boolean SortedArray(List<Integer> arr)
    {
        for(int i=0;i<arr.size()-1;i++)
        {
            if(arr.get(i)>arr.get(i+1))
            {
                return false;
            }
        }
        return true;
    }
}
