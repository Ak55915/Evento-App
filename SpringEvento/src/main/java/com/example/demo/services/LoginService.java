package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Vendor;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.VendorRepository;

@Service
public class LoginService 
{
	@Autowired
	LoginRepository lrepo;
	
	@Autowired
	CustomerRepository crepo;
	
	@Autowired
	VendorRepository vrepo;
	
	public Login add(Login l)
	{
		return lrepo.save(l);
	}	
	
	public Object loginCheck(String uid,String pwd) 
		{
			Login l= lrepo.loginCheck(uid, pwd);
			if(l!=null) 
			{
				
				Customer c=null;
				Vendor v=null;
				
				if(l.getRole().equals("customer")) 
				{
					c=crepo.getcustomer(l);
					return c;
				}
				
				else if(l.getRole().equals("vendor")) 
				{
					v=vrepo.getvendor(l);
					return v;
					
				}
				
				else if(l.getRole().equals("admin")) 
				{
					
					return l;
				}
				
				
			}
			else 
			{
			
				
			}
			return null;		
			
		}
		
	}


