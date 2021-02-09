package com.wcs.api.checkpoint4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wcs.api.checkpoint4.DTO.CreateProfilParentDTO;
import com.wcs.api.checkpoint4.entity.Parent;
import com.wcs.api.checkpoint4.mapper.ParentMapper;
import com.wcs.api.checkpoint4.repository.ParentRepository;

@Service
public class ParentService {

	@Autowired
	ParentRepository parentRepository;
	
	@Autowired
	ParentMapper parentMapper;
	
	public Parent createProfil(CreateProfilParentDTO dto) {
		Parent parentProfil = parentMapper.mapCreateProfilParentDtoToEntity(dto);
		return parentRepository.save(parentProfil);
	}
}
