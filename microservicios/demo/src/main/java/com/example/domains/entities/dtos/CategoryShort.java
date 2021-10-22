package com.example.domains.entities.dtos;

import org.springframework.beans.factory.annotation.Value;

public interface CategoryShort {
	int getCategoryId();
	
	@Value("#{target.Name}")
	String getNombreCompleto();
}