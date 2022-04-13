package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Event;
import com.example.demo.entities.Service1;
import com.example.demo.repositories.EventRepo;

@Service
public class EventService {

	@Autowired
	EventRepo erepo;
	
	public Event save(Event e) 
	{	
		return erepo.save(e);
	}
	
	public List<Event> getAll()
	{
		return erepo.findAll();
	}
	
	public List<Event> getdetails1(int eid)
	{
		return erepo.getdetails(eid);
	}
}
