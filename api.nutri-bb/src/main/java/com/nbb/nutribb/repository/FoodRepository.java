package com.nbb.nutribb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nbb.nutribb.entity.Food;



@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

}
