package com.examples;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


class CalculadoraTest {

	Calculadora calc;
	

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		calc = new Calculadora();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testSuma() {
		assertEquals(4, calc.suma(2, 2));
	}

	@Nested
	@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
	class Divisiones {

		@Test
		void testDivideDoubleDouble() {
		//	assertEquals(0.5, calc.divide(1.0, 2));
			
			//assertThrows(Exception.class, () -> calc.divide(1.0, 0));
			assertEquals(Double.POSITIVE_INFINITY, calc.divide(1.0, 0));	
			var d = 1 / 0;
		}

		@Test
		@DisplayName("Division entera")
		void testDivideIntInt() {
			assertEquals(1, calc.divide(2, 2));
			
			assertThrows(Exception.class, () -> calc.divide(1, 0));
		}

	}
	
	
	
}
