package com.wcs.api.checkpoint4.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wcs.api.checkpoint4.DTO.CreateProfilParentDTO;
import com.wcs.api.checkpoint4.entity.Parent;
import com.wcs.api.checkpoint4.service.ParentService;

@RestController
public class ParentController {
	
	@Autowired
	ParentService parentservice;

	@PostMapping("/parents")
	public @ResponseBody ResponseEntity<Parent> createProfil(CreateProfilParentDTO dto){
		Parent parent = parentservice.createProfil(dto);
		return ResponseEntity.ok().body(parent);		
	}
}
