package com.wcs.api.checkpoint4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wcs.api.checkpoint4.entity.Parent;

@Repository
public interface ParentRepository extends JpaRepository<Parent, Long>{

}
