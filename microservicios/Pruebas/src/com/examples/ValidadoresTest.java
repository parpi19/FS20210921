package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ValidadoresTest {

	Validadores dni;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		dni = new Validadores();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testDNI() {
		assertAll("DNI", () -> assertTrue(dni.esDniValido("12345678Z")),
				() -> assertTrue(dni.esDniValido("12345678z")),
				() -> assertFalse(dni.esDniValido("12345678A")),
				() -> assertFalse(dni.isNIF("123456789")),
				() -> assertThrows(Exception.class, () -> dni.esDniValido(null)), 
				() -> assertFalse(dni.esDniValido(""))
		);
	}
	
	@Test
	void testIsDNI() {
		assertAll("DNI", () -> assertTrue(dni.isNIF("12345678Z")),
				() -> assertTrue(dni.isNIF("12345678z")),
				() -> assertFalse(dni.isNIF("12345678A")),
				() -> assertFalse(dni.isNIF("123456789")),
				() -> assertThrows(Exception.class, () -> dni.isNIF(null)), 
				() -> assertFalse(dni.isNIF(""))
		);
	}

}
