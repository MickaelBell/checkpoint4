package com.nbb.nutribb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nbb.nutribb.DTO.CreateProfilParentDTO;
import com.nbb.nutribb.entity.Parent;
import com.nbb.nutribb.service.ParentService;


@CrossOrigin
@RestController
public class ParentController {
	
	@Autowired
	ParentService parentservice;

	@GetMapping("/parents")
	public ResponseEntity<List<Parent>> indexParent(){
		List<Parent> parent = parentservice.getAllParent();
		return ResponseEntity.ok().body(parent);
	}
	
	@PostMapping("/parents")
	public ResponseEntity<Parent> createProfil(@RequestBody CreateProfilParentDTO dto){
		Parent parent = parentservice.createProfil(dto);
		return ResponseEntity.ok().body(parent);		
	}
}
