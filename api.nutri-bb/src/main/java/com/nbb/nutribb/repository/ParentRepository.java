package com.nbb.nutribb.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.nbb.nutribb.entity.Parent;



@Repository
public interface ParentRepository extends JpaRepository<Parent, Long>{
}
