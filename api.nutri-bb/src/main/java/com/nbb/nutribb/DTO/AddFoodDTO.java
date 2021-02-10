package com.nbb.nutribb.DTO;

public class AddFoodDTO {

	private String name;
	private String type;
	private int minimumAge;
	private int consumption;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getMinimumAge() {
		return minimumAge;
	}
	public void setMinimumAge(int minimumAge) {
		this.minimumAge = minimumAge;
	}
	public int getConsumption() {
		return consumption;
	}
	public void setConsumption(int consumption) {
		this.consumption = consumption;
	}
	
}
