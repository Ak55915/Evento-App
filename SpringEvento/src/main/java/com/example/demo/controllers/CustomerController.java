package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CustomerRegister;
import com.example.demo.entities.Login;
import com.example.demo.entities.Customer;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class CustomerController
{
	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	
	@PostMapping("/register")
	public Customer customerregister(@RequestBody CustomerRegister cr)
	{
		System.out.println(cr);
		Login l=new Login(cr.getEmailid(),cr.getPwd(),"customer",cr.getSec_ans(),cr.getSec_id());
		Login inserted=lservice.add(l);
		
		Customer c=new Customer(cr.getFname(),cr.getLname(),cr.getContactno(),cr.getAddress(),inserted);
		return cservice.add(c);
	}
	@GetMapping("/custinfo")
	public Customer getByIdUsingPathVariable(@RequestParam("cust_id") int cust_id) 
	{
		return cservice.getById(cust_id);
	}	
	
	@PostMapping("/updatePro")
	public  Customer custUpdate(@RequestBody Customer vr)
	{
		Customer v=new  Customer(vr.getCust_id(),vr.getFname(),vr.getLname(),vr.getContact_no(),vr.getAddress());	
		return cservice.add1(v);
	
	}
	
}
