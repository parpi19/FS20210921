package com.example.infraestructure.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Film;


public interface FilmRepository extends JpaRepository<Film, Integer> {	

	<T> List<T> findByFilmIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByFilmIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByFilmIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("FROM Film a WHERE a.lastUpdate > ?1")
	List<Film> laMia(Date fecha);
}