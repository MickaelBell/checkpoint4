package com.nbb.nutribb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbb.nutribb.entity.Food;
import com.nbb.nutribb.entity.Parent;
import com.nbb.nutribb.repository.FoodRepository;
import com.nbb.nutribb.repository.ParentRepository;

@Service
public class FoodService {
	
	@Autowired
	FoodRepository foodRepository;
	
	@Autowired
	ParentRepository parentRepository;
	
	public List<Food> getAllFood(){
		return foodRepository.findAll();
	}

	/*public List<Food> getFoodByAge(Long id){
		Parent parent = parentRepository.findById(id).orElse(null);
		
		if(parent.getChildAge()>= 0) {
			List<Food> food = foodRepository.findAll();
			if(food.ge)
		}
	}*/
}
