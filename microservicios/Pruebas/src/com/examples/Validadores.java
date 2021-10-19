package com.examples;

import java.util.regex.Pattern;

public class Validadores {

	public boolean esDniValido(String dni) {

		String letraMayus = "";

		if (dni.length() != 9 || Character.isLetter(dni.charAt(8)) == false) {
			return false;
		}

		letraMayus = dni.substring(8).toUpperCase();

		if (soloNumeros(dni) == true && letraDNI(dni).equals(letraMayus)) {
			return true;
		} else {
			return false;
		}

	}

	private boolean soloNumeros(String dni) {
		String numero = "";
		String miDNI = "";
		String[] unoNueve = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };

		for (int i = 0; i < dni.length() - 1; i++) {
			numero = dni.substring(i, i + 1);
			for (int j = 0; j < unoNueve.length; j++) {
				if (numero.equals(unoNueve[j])) {
					miDNI += unoNueve[j];
				}
			}

		}
		if (miDNI.length() != 8) {
			return false;

		} else {
			return true;
		}
	}

	private String letraDNI(String dni) {
		int miDNI = Integer.parseInt(dni.substring(0, 8));
		int resto = 0;
		String miLetra = "";
		String[] asignacionLetra = { "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S",
				"Q", "V", "H", "L", "C", "K", "E" };

		resto = miDNI % 23;

		miLetra = asignacionLetra[resto];

		return miLetra;
	}
	
	
	public boolean isNIF(String dni) {
		Pattern patronPattern = Pattern.compile("[0-9]{7,8}[A-Z a-z]");
		if(!patronPattern.matcher(dni).matches()) {
			return false;
		}
		String letterValueString = dni.substring(dni.length() - 1);
		String numberValueString = dni.substring(0, dni.length() -1);
		return Character.toUpperCase(letterValueString.charAt(0)) == "TRWAGMYFPDXBNJZSQVHLCKE".charAt(Integer.parseInt(numberValueString) % 23);
	}

}
