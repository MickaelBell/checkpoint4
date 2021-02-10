package com.nbb.nutribb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbb.nutribb.DTO.CreateProfilParentDTO;
import com.nbb.nutribb.entity.Parent;
import com.nbb.nutribb.mapper.ParentMapper;
import com.nbb.nutribb.repository.ParentRepository;

@Service
public class ParentService {

	@Autowired
	ParentRepository parentRepository;
	
	@Autowired
	ParentMapper parentMapper;
	
	public List<Parent> getAllParent(){
		return parentRepository.findAll();
	}
	
	public Boolean deleteProfile(Long id){
		parentRepository.deleteById(id);
		return true;
	}

	public Parent getParentById(Long id){
		return parentRepository.findById(id).get();
	}
	
	public Parent createProfil(CreateProfilParentDTO dto) {
		Parent parentProfil = parentMapper.mapCreateProfilParentDtoToEntity(dto);
		return parentRepository.save(parentProfil);
	}
}
