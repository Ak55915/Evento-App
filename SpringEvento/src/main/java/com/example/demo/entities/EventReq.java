package com.example.demo.entities;

import java.sql.Date;


import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;




@Entity
@Table(name ="event_requests")
public class EventReq {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	int req_id;
	
	@Column
	String location;
	
	@JsonFormat(pattern ="yyyy-MM-dd")
	@Column
	Date date_time;
	
	@Column
	int guests;
	
	@Column
	double budget;
	
	@Column
	String status;
	
	
	@Column
	int eid;
	
	@Column
	int v_id;
	
	@Column
	int cust_id;
	
	
	
	

	public EventReq() 
	{
		super();
		// TODO Auto-generated constructor stub
	}


	public EventReq(String location, Date date_time, int guests, double budget, String status, int eid,
			int cust_id) 
	{
		super();
		this.location = location;
		this.date_time = date_time;
		this.guests = guests;
		this.budget = budget;
		this.status = status;
		this.eid = eid;
		this.cust_id = cust_id;
	}
	

	public EventReq(int req_id, String location, Date date_time, int guests, double budget, String status, int eid,
			 int v_id,int cust_id) 
	{
		super();
		this.req_id = req_id;
		this.location = location;
		this.date_time = date_time;
		this.guests = guests;
		this.budget = budget;
		this.status = status;
		this.eid = eid;
		this.cust_id = cust_id;
		this.v_id = v_id;
	}
	

	public EventReq(String location, Date date_time, int guests, double budget, int eid, int cust_id) 
	{
		super();
		this.location = location;
		this.date_time = date_time;
		this.guests = guests;
		this.budget = budget;
		this.eid = eid;
		this.cust_id = cust_id;
	}




	public EventReq(String location, Date date_time, int guests, double budget, String status, int eid, int v_id,
			int cust_id)
	{
		super();
		this.location = location;
		this.date_time = date_time;
		this.guests = guests;
		this.budget = budget;
		this.status = status;
		this.eid = eid;
		this.v_id = v_id;
		this.cust_id = cust_id;
	}


	public int getReq_id() {
		return req_id;
	}

	public void setReq_id(int req_id) {
		this.req_id = req_id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getDate_time() {
		return date_time;
	}

	public void setDate_time(Date date_time) {
		this.date_time = date_time;
	}

	public int getGuests() {
		return guests;
	}

	public void setGuests(int guests) {
		this.guests = guests;
	}

	public double getBudget() {
		return budget;
	}

	public void setBudget(double budget) {
		this.budget = budget;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}

	public int getV_id() {
		return v_id;
	}

	public void setV_id(int v_id) {
		this.v_id = v_id;
	}
	

	
}
