package com.reportes.model;


public class Venta{

private String categoria;
private double totalFacturado;
private int anio1;
private int anio2;





public String getCategoria(){
	return categoria;	
}

public void setCategoria(String categoria){
	this.categoria=categoria;
}

public double getTotalFacturado(){
	return totalFacturado;	
}

public void setTotalFacturado(double totalFacturado){
	this.totalFacturado=totalFacturado;
}

public int getAnio1(){
	return anio1;	
}

public void setAnio1(int anio1){
	this.anio1=anio1;
}

public int getAnio2(){
	return anio2;	
}

public void setAnio2(int anio2){
	this.anio2=anio2;
}



}