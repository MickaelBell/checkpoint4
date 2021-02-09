package com.wcs.api.checkpoint4.mapper;

import org.springframework.stereotype.Component;

import com.wcs.api.checkpoint4.DTO.CreateProfilParentDTO;
import com.wcs.api.checkpoint4.entity.Parent;

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
