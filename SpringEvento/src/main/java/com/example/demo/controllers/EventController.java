package com.example.demo.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Event;
import com.example.demo.entities.EventRegister;
import com.example.demo.entities.Service1;
import com.example.demo.services.EventService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class EventController
{

	@Autowired
	EventService eservice;
	
	@PostMapping("/addevent")
	public Event saveevent(@RequestBody EventRegister er) 
	{
		System.out.println(er);
		boolean [] arr = er.getServices();
		Set<Service1> se_services = new HashSet<>();
		
		for(int i=0;i<arr.length;i++)
		{
			if(arr[i] == true)
				se_services.add(new Service1(i+1));
		}
		
		Event e = new Event(er.getEname(),er.getDescription(),er.getPrice(),er.getAdd_on_price(),er.getNo_of_guest(),se_services);
		System.out.println(e);
		return eservice.save(e);
	}
	
	@GetMapping("/fetchevent")
	public List<Event> getService()
	{
		return eservice.getAll();
	}
	
	@GetMapping("/geteventdetails")
	public List<Event> getdetails12(@RequestParam("eid") int eid)
	{
		return eservice.getdetails1(eid);
	}
}