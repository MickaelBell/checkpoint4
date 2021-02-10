package com.nbb.nutribb.mapper;

import org.springframework.stereotype.Component;

import com.nbb.nutribb.DTO.CreateProfilParentDTO;
import com.nbb.nutribb.entity.Parent;


@Component
public class ParentMapper {
	
	public Parent mapCreateProfilParentDtoToEntity(CreateProfilParentDTO dto) {
		Parent parent = new Parent();
		parent.setFirstname(dto.getFirstname());
		parent.setLastname(dto.getLastname());
		parent.setChildAge(dto.getChildAge());
		parent.setEmail(dto.getEmail());
		return parent;
	}

}
