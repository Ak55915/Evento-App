package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.EventReq;
import com.example.demo.entities.EventRequest;
import com.example.demo.services.EventRequestService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class AddEventRequestController
{
	@Autowired
	EventRequestService eservices;
	
	@PostMapping("/registerrequest")
	public EventReq saveRequest(@RequestBody EventRequest s)
	{
		EventReq er=new EventReq(s.getLocation(),s.getDate_time(),s.getGuest(),s.getBudget(),"false",s.getEid(),s.getCust_id());
		return eservices.savereq(er);
		
	}
}
