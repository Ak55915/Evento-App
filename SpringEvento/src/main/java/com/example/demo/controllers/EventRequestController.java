package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.EventData;
import com.example.demo.entities.EventReq;
import com.example.demo.entities.Service1;
import com.example.demo.services.EventRequestService;

	@CrossOrigin(origins ="http://localhost:3000")
	@RestController
	public class EventRequestController 
	{
		
		@Autowired
		EventRequestService eservices;
		
		@GetMapping("/allrequest")
		public List<EventReq> getAllRequest()
		{
			return eservices.getRequests();
		}
		
		@PostMapping("/updaterequest")
		public int updaterequest(@RequestBody EventData e) 
		{
			return eservices.updaterequest(e.getReq_id(), e.getStatus(),e.getVid());
			
		}
		@GetMapping("/all")
		public List<EventReq> fetch()
		{
			return eservices.getAll();
		}
		
		
	}


