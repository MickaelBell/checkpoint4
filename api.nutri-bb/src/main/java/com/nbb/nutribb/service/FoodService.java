package com.nbb.nutribb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbb.nutribb.DTO.AddFoodDTO;
import com.nbb.nutribb.entity.Food;
import com.nbb.nutribb.mapper.FoodMapper;
import com.nbb.nutribb.repository.FoodRepository;


@Service
public class FoodService {
	
	@Autowired
	FoodRepository foodRepository;
	
	@Autowired
	FoodMapper foodMapper;
	
	public List<Food> getAllFood(){
		return foodRepository.findAll();
	}
	
	public Food addFood(AddFoodDTO dto) {
		Food addFood = foodMapper.mapAddFoodDtoToEntity(dto);
		return foodRepository.save(addFood);
	}
	
	public Boolean deleteFood(Long id){
		foodRepository.deleteById(id);
		return true;
	}

}
