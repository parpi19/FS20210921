package com.example.domains.entities;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.hibernate.validator.constraints.Length;

import com.example.domains.core.EntityBase;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

/**
 * The persistent class for the film database table.
 * 
 */
@Entity
@Table(name = "film")
@NamedQuery(name = "Film.findAll", query = "SELECT f FROM Film f")
public class Film extends EntityBase<Film> implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "film_id")
	@JsonProperty("id")
	private int filmId;

	@Lob
	private String description;

	@Column(name="last_update")
	@Generated(value = GenerationTime.ALWAYS)
	@PastOrPresent
	@JsonIgnore
	private Timestamp lastUpdate;

	@JsonIgnore
	private int length;

	private String rating;

	@Column(name = "release_year")
	private Short releaseYear;

	@JsonIgnore
	@Column(name = "rental_duration")
	private byte rentalDuration;

	
	@Column(name = "rental_rate")
	@JsonIgnore
	private BigDecimal rentalRate;

	@JsonIgnore
	@Column(name = "replacement_cost")
	private BigDecimal replacementCost;

	@NotBlank
	@Length(max = 148)
	private String title;

	// bi-directional many-to-one association to Language
	@ManyToOne
	@JoinColumn(name = "language_id")
	private Language language;

	// bi-directional many-to-one association to Language
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "original_language_id")
	private Language languageVO;

	// bi-directional many-to-one association to FilmActor
	@OneToMany(mappedBy = "film")
	@JsonIgnore
	private List<FilmActor> filmActors;

	// bi-directional many-to-one association to FilmCategory
	@OneToMany(mappedBy = "film")

	private List<FilmCategory> filmCategories;

	public Film() {
	}

	public Film(int filmId) {
		super();
		this.filmId = filmId;
	}

	
	public Film(@Length(max = 5) int filmId, @NotBlank @Length(max = 25) String title, String description,
			Language language) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
		this.language = language;
	}
	
	

	public Film(int filmId, @NotBlank @Length(max = 148) String title, String description, Language language,
			byte rentalDuration, BigDecimal rentalRate, BigDecimal replacementCost,
			@PastOrPresent Timestamp lastUpdate) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
		this.language = language;
		this.rentalDuration = rentalDuration;
		this.rentalRate = rentalRate;
		this.replacementCost = replacementCost;
		this.lastUpdate = lastUpdate;
	}
	
	
	

	public Film(int filmId, @NotBlank @Length(max = 148) String title, String description, Language language, int length, 
			Short releaseYear, byte rentalDuration, BigDecimal rentalRate, String rating, BigDecimal replacementCost,
			@PastOrPresent Timestamp lastUpdate) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
		this.language = language;
		this.length = length;
		this.releaseYear = releaseYear;
		this.rentalDuration = rentalDuration;
		this.rentalRate = rentalRate;
		this.rating = rating;
		this.replacementCost = replacementCost;
		this.lastUpdate = lastUpdate;
	}

	public Film(int filmId, @NotBlank @Length(max = 148) String title, String description,
			@PastOrPresent Timestamp lastUpdate, String rating, Short releaseYear, byte rentalDuration,
			BigDecimal rentalRate, BigDecimal replacementCost, Language language, List<FilmActor> filmActors,
			List<FilmCategory> filmCategories) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
		this.lastUpdate = lastUpdate;
		this.rating = rating;
		this.releaseYear = releaseYear;
		this.rentalDuration = rentalDuration;
		this.rentalRate = rentalRate;
		this.replacementCost = replacementCost;
		this.language = language;
		this.filmActors = filmActors;
		this.filmCategories = filmCategories;
	}

	public Film(int filmId, @NotBlank @Length(max = 148) String title, String description,
			@PastOrPresent Timestamp lastUpdate, int length, String rating, Short releaseYear, byte rentalDuration,
			BigDecimal rentalRate, BigDecimal replacementCost, Language language, Language languageVO,
			List<FilmActor> filmActors, List<FilmCategory> filmCategories) {
		super();
		this.filmId = filmId;
		this.title = title;
		this.description = description;
		this.lastUpdate = lastUpdate;
		this.length = length;
		this.rating = rating;
		this.releaseYear = releaseYear;
		this.rentalDuration = rentalDuration;
		this.rentalRate = rentalRate;
		this.replacementCost = replacementCost;
		this.language = language;
		this.languageVO = languageVO;
		this.filmActors = filmActors;
		this.filmCategories = filmCategories;
	}

	public int getFilmId() {
		return this.filmId;
	}

	public void setFilmId(int filmId) {
		this.filmId = filmId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Timestamp getLastUpdate() {
		return this.lastUpdate;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public int getLength() {
		return this.length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public String getRating() {
		return this.rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public Short getReleaseYear() {
		return this.releaseYear;
	}

	public void setReleaseYear(Short releaseYear) {
		this.releaseYear = releaseYear;
	}

	public byte getRentalDuration() {
		return this.rentalDuration;
	}

	public void setRentalDuration(byte rentalDuration) {
		this.rentalDuration = rentalDuration;
	}

	public BigDecimal getRentalRate() {
		return this.rentalRate;
	}

	public void setRentalRate(BigDecimal rentalRate) {
		this.rentalRate = rentalRate;
	}

	public BigDecimal getReplacementCost() {
		return this.replacementCost;
	}

	public void setReplacementCost(BigDecimal replacementCost) {
		this.replacementCost = replacementCost;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Language getLanguage() {
		return this.language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	public Language getLanguageVO() {
		return this.languageVO;
	}

	public void setLanguageVO(Language languageVO) {
		this.languageVO = languageVO;
	}

	public List<FilmActor> getFilmActors() {
		return this.filmActors;
	}

	public void setFilmActors(List<FilmActor> filmActors) {
		this.filmActors = filmActors;
	}

	public FilmActor addFilmActor(FilmActor filmActor) {
		getFilmActors().add(filmActor);
		filmActor.setFilm(this);

		return filmActor;
	}

	public FilmActor removeFilmActor(FilmActor filmActor) {
		getFilmActors().remove(filmActor);
		filmActor.setFilm(null);

		return filmActor;
	}

	public List<FilmCategory> getFilmCategories() {
		return this.filmCategories;
	}

	public void setFilmCategories(List<FilmCategory> filmCategories) {
		this.filmCategories = filmCategories;
	}

	public FilmCategory addFilmCategory(FilmCategory filmCategory) {
		getFilmCategories().add(filmCategory);
		filmCategory.setFilm(this);

		return filmCategory;
	}

	public FilmCategory removeFilmCategory(FilmCategory filmCategory) {
		getFilmCategories().remove(filmCategory);
		filmCategory.setFilm(null);

		return filmCategory;
	}

	
	
	@Override
	public int hashCode() {
		return Objects.hash(filmId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Film other = (Film) obj;
		return filmId == other.filmId;
	}

	@Override
	public String toString() {
		return "Film [filmId=" + filmId + ", title=" + title + "]";
	}

}