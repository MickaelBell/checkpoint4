package com.nbb.nutribb.mapper;

import org.springframework.stereotype.Component;

import com.nbb.nutribb.DTO.AddFoodDTO;
import com.nbb.nutribb.entity.Food;

@Component
public class FoodMapper {

	public Food mapAddFoodDtoToEntity(AddFoodDTO dto) {
		Food food = new Food();
		food.setName(dto.getName());
		food.setType(dto.getType());
		food.setMinimumAge(dto.getMinimumAge());
		food.setConsumption(dto.getConsumption());
		return food;
	}
}
