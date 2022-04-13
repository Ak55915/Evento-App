package com.example.demo.entities;

public class EventData {


	int req_id;
	
	String status;
	
	int v_id;

	
	public EventData() {
		super();
		// TODO Auto-generated constructor stub
	}


	public EventData(int req_id,String status, int v_id) {
		super();
		this.req_id = req_id;
		this.status = status;
		this.v_id = v_id;
	}


	public int getReq_id() {
		return req_id;
	}


	public void setReq_id(int req_id) {
		this.req_id = req_id;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public int getVid() {
		return v_id;
	}


	public void setVid(int v_id) {
		this.v_id = v_id;
	}

}
