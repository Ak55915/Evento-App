package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Service1;
import com.example.demo.repositories.ServiceRepo;

@Service
public class ServiceService 
{

	@Autowired
	ServiceRepo srepo;
	
	
	public Service1 save(Service1 s) 
	{
		return srepo.save(s);
	}
	
	public List<Service1> getAll()
	{
		return srepo.findAll();
	}
	public List<Service1> getdetails1(int eid)
	{
		return srepo.getdetails(eid);
	}
}
