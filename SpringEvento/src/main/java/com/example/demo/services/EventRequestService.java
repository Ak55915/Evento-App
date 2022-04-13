package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.EventReq;
import com.example.demo.repositories.EventRequestRepository;

@Service
public class EventRequestService
{
	@Autowired
	EventRequestRepository erepo;
	
	public List<EventReq> getAll()
	{
		return erepo.findAll();
	}
	
	public EventReq savereq(EventReq eq)
	{
		return erepo.save(eq);
	}
	public List<EventReq> getRequests()
	{
		return erepo.getRequests();
	}
	
	public int updaterequest(int req_id,String status,int v_id) 
	{
		return erepo.updateRequest(req_id,status, v_id);
		
	}
	
}
