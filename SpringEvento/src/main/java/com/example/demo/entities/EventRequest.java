package com.example.demo.entities;

import java.sql.Date;




import com.fasterxml.jackson.annotation.JsonFormat;

public class EventRequest 
{
	
	String location;
	
	@JsonFormat(pattern ="yyyy-MM-dd")
	Date date_time;
	
	int guest;
	
	double budget;

	String status;
	
	int eid;
		
	int cust_id;

	int v_id;
	
	public EventRequest() 
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public EventRequest(String location, Date date_time, int guest, double budget,String status, int eid,
			int cust_id)
	{
		super();
		this.location = location;
		this.date_time = date_time;
		this.guest = guest;
		this.budget = budget;
		this.status = status;
		this.eid = eid;
		this.cust_id = cust_id;
	}

	public EventRequest(String location, Date date_time, int guest, double budget, int eid, int cust_id)
	{
		super();
		this.location = location;
		this.date_time = date_time;
		this.guest = guest;
		this.budget = budget;
		this.eid = eid;
		this.cust_id = cust_id;
	}

	public EventRequest(String location, Date date_time, int guest, double budget, String status, int eid, int cust_id,
			int v_id) 
	{
		super();
		this.location = location;
		this.date_time = date_time;
		this.guest = guest;
		this.budget = budget;
		this.status = status;
		this.eid = eid;
		this.cust_id = cust_id;
		this.v_id = v_id;
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

	public int getGuest() {
		return guest;
	}

	public void setGuest(int guest) {
		this.guest = guest;
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
