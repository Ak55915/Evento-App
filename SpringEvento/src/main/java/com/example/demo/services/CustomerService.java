package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CustomerRepository;


@Service
public class CustomerService
{
	@Autowired
	CustomerRepository crepo;
	
	
	public Customer add(Customer c)
	{
		return crepo.save(c);
	}
	
	public Customer getcustomer(Login l) 
	{
		return crepo.getcustomer(l);
	}
	public Customer getById(int id) 
	{
		java.util.Optional<Customer> cust = crepo.findById(id);
		Customer s = null;
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



	public Customer add1(Customer v) {
		// TODO Auto-generated method stub
		return crepo.save(v);
	}

}
