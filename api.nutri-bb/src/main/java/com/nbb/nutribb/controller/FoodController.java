package com.nbb.nutribb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nbb.nutribb.DTO.AddFoodDTO;
import com.nbb.nutribb.entity.Food;
import com.nbb.nutribb.service.FoodService;

@CrossOrigin
@RestController
public class FoodController {

	@Autowired
	FoodService foodService;
	
	@GetMapping("/foods")
	public ResponseEntity<List<Food>> indexFood(){
		List<Food> food = foodService.getAllFood();
		return ResponseEntity.ok().body(food);
	}
	
	@PostMapping("/foods")
	public ResponseEntity<Food> addFoood(@RequestBody AddFoodDTO dto){
		Food food = foodService.addFood(dto);
		return ResponseEntity.ok().body(food);
	}
	
	@DeleteMapping("/foods/{id}")
	public Boolean deletFood(@PathVariable Long id){
		foodService.deleteFood(id);
		return true;
	}
	
}
