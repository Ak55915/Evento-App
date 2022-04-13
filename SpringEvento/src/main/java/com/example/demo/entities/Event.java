package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="events")
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	int eid;
	
	@Column
	String ename;
	
	@Column
	String description;
	
	@Column
	float price;
	
	@Column
	float add_on_price;
	
	
	@Column
	String no_of_guest;
	
	@ManyToMany(cascade = {CascadeType.MERGE})
	//@JsonProperty(access = JsonProperty.Access.AUTO)
	@JoinTable(name = "event_service",
	joinColumns = @JoinColumn(name="eid"),
	inverseJoinColumns = @JoinColumn(name="sid")	
	)
	 @JsonIgnore
	Set<Service1> services;

	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Event(int eid, String ename, String description, float price, float add_on_price, String no_of_guest,
			Set<Service1> services) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.description = description;
		this.price = price;
		this.add_on_price = add_on_price;
		this.no_of_guest = no_of_guest;
		this.services = services;
	}

	public Event(String ename, String description, float price, float add_on_price, String no_of_guest,
			Set<Service1> services)
	{
		super();
		this.ename = ename;
		this.description = description;
		this.price = price;
		this.add_on_price = add_on_price;
		this.no_of_guest = no_of_guest;
		this.services = services;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
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

	public Set<Service1> getServices() {
		return services;
	}

	public void setServices(Set<Service1> services) {
		this.services = services;
	}

	@Override
	public String toString() 
	{
		return "Event [eid=" + eid + ", ename=" + ename + ", description=" + description + ", price=" + price
				+ ", add_on_price=" + add_on_price + ", no_of_guest=" + no_of_guest + ", services=" + services + "]";
	}
	
	
	
	
	
}
