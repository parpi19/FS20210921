package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {
	@JsonProperty("id")
	private int filmId;
	private String title;

	private String description;
	@JsonProperty("language")
	private int language_id; 
	
	@JsonProperty("rental_duration")
	private byte rentalDuration;
	
	@JsonProperty("rental_rate")
	private BigDecimal rentalRate;
	
	@JsonProperty("rep_cost")
	private BigDecimal repCost;
	
	@JsonProperty("last_update")
	private Timestamp lastUpdate;
	
//	@JsonProperty("actors")
//	private List<Integer>filmActors;
//	
//	@JsonProperty("categories")
//	private List<Integer>filmCategories;
	
	
	public static Film from(FilmDTO source) {
		return new Film(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				new Language (source.getLanguage_id()),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getRepCost(),
				source.getLastUpdate()
				
				
				);
	}
	public static FilmDTO from(Film source) {
		return new FilmDTO(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				source.getLanguage().getLanguageId(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getLastUpdate()
//				source.getFilmActors().stream().map(item -> item.getActor().getActorID()).collect(Collectors.toList()),
//				source.getFilmCategories().stream().map(item -> item.getcategory().getCategoryID()).collect(Collectors.toList())
				);
	}
}
