package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.constraints.Size;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FilmDTO {
	@JsonProperty("id")
	private int filmId;

	@Size(max = 128)
	@ApiModelProperty(name = "Titulo", value = "Título de la película", required = true)
	private String title;

	@ApiModelProperty(name = "Descripcion", value = "Descripción de la película", required = true)
	private String description;

	@JsonProperty("language")
	@Size(max = 3)
	@ApiModelProperty(name = "Idioma", value = "Idioma de la película", required = true)
	private int language_id;

	@JsonProperty("length")
	private int length;
	
	@JsonProperty("release_year")
	private Short releaseYear;

	@JsonProperty("rental_duration")
	private byte rentalDuration;

	@JsonProperty("rental_rate")
	private BigDecimal rentalRate;
	
	@JsonProperty("rating")
	private String rating;
	
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
		return new Film(source.getFilmId(), source.getTitle(), source.getDescription(),
				new Language(source.getLanguage_id()), source.getLength(), source.getReleaseYear(), source.getRentalDuration(),
				source.getRentalRate(), source.getRating(),  source.getRepCost(),  source.getLastUpdate()

		);
	}

	public static FilmDTO from(Film source) {
		return new FilmDTO(source.getFilmId(), source.getTitle(), source.getDescription(),
				source.getLanguage().getLanguageId(), source.getLength(), source.getReleaseYear(), source.getRentalDuration(),
				source.getRentalRate(), source.getRating(),  source.getReplacementCost(), source.getLastUpdate()
//				source.getFilmActors().stream().map(item -> item.getActor().getActorID()).collect(Collectors.toList()),
//				source.getFilmCategories().stream().map(item -> item.getcategory().getCategoryID()).collect(Collectors.toList())
		);
	}
}
