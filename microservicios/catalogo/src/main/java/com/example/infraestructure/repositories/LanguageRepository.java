package com.example.infraestructure.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.domains.entities.Language;


@RepositoryRestResource(exported = false)
public interface LanguageRepository extends JpaRepository<Language, Integer> {

}