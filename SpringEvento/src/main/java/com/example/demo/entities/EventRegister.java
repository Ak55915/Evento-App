package com.example.demo.entities;

import java.util.Arrays;
import java.util.List;

public class EventRegister 
{
	String ename;
	String description;
	float price;
	float add_on_price;
	String no_of_guest;
	boolean[] services;
	
	public EventRegister() 
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public EventRegister(String ename, String description, float price, float add_on_price, String no_of_guest,
			boolean[] services) {
		super();
		this.ename = ename;
		this.description = description;
		this.price = price;
		this.add_on_price = add_on_price;
		this.no_of_guest = no_of_guest;
		this.services = services;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getAdd_on_price() {
		return add_on_price;
	}

	public void setAdd_on_price(float add_on_price) {
		this.add_on_price = add_on_price;
	}

	public String getNo_of_guest() {
		return no_of_guest;
	}

	public void setNo_of_guest(String no_of_guest) {
		this.no_of_guest = no_of_guest;
	}

	public boolean[] getServices() {
		return services;
	}

	public void setServices(boolean[] services) {
		this.services = services;
	}

	@Override
	public String toString() {
		return "EventRegister [ename=" + ename + ", description=" + description + ", price=" + price + ", add_on_price="
				+ add_on_price + ", no_of_guest=" + no_of_guest + ", services=" + Arrays.toString(services) + "]";
	}

	

	

	
	
	
	
}
