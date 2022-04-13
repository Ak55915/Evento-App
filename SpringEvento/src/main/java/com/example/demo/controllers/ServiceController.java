package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Service1;
import com.example.demo.services.ServiceService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class ServiceController {

	@Autowired
	ServiceService sservice;
	
	@PostMapping("/addservice")
	public Service1 saveservice(@RequestBody Service1 s) 
	{
		return sservice.save(s);
	}
	@GetMapping("/fetchservice")
	public List<Service1> getService()
	{
		return sservice.getAll();
	}
	@GetMapping("/getdetails")
	public List<Service1> getdetails12(@RequestParam("eid") int eid)
	{
		return sservice.getdetails1(eid);
	}
	
}
