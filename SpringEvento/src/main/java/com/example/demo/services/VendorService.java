package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Vendor;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.VendorRepository;

@Service
public class VendorService 
{
	@Autowired
	VendorRepository vrepo;
	
	
	public Vendor add(Vendor v)
	{
		return vrepo.save(v);
	}
	
	
	public Vendor getvendor(Login l) 
	{
		return vrepo.getvendor(l);
	}
	public List<Vendor> getAll()
	{
		return vrepo.findAll();
	}
	
	
	  
	
	public Vendor getById(int id) 
		{
			java.util.Optional<Vendor> cust = vrepo.findById(id);
			Vendor s = null;
			try 
			{
				s = cust.get();
			}
			catch (Exception e)
			{
				s=null;
			}
			return s;
		}



		public Vendor add1(Vendor v) {
			// TODO Auto-generated method stub
			return vrepo.save(v);
		}
}
