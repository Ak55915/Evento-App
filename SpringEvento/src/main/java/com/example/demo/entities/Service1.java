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
@Table(name="services")
public class Service1 {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int sid;
	
	@Column
	String sname;
	
	@Column
	String description ;
	
	@ManyToMany(cascade = {CascadeType.MERGE})
	@JoinTable(name = "event_service",
	joinColumns = @JoinColumn(name="sid"),
	inverseJoinColumns = @JoinColumn(name="eid")
	)
	
	//@JsonIgnoreProperties("events")
	Set<Event> events;

	public Service1() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Service1(int sid) {
		super();
		this.sid = sid;
	}
	


	public Service1(String sname) {
		super();
		this.sname = sname;
	}
	
	


	public Service1(String sname, String description, Set<Event> events) {
		super();
		this.sname = sname;
		this.description = description;
		this.events = events;
	}


	public int getSid() {
		return sid;
	}


	public void setSid(int sid) {
		this.sid = sid;
	}


	public String getSname() {
		return sname;
	}


	public void setSname(String sname) {
		this.sname = sname;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Set<Event> getEvents() {
		return events;
	}

	public void setEvents(Set<Event> events) {
		this.events = events;
	}

	@Override
	public String toString()
	{
		return "Service [sid=" + sid + ", sname=" + sname + ", description=" + description + ", events=" + events + "]";
	}

		
}
