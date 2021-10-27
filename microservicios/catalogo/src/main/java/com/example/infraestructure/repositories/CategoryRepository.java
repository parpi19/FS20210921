package com.example.infraestructure.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.domains.entities.Category;

@RepositoryRestResource(exported = false)
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}