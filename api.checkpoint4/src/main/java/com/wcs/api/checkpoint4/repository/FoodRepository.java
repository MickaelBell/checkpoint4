package com.wcs.api.checkpoint4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wcs.api.checkpoint4.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long> {

}
