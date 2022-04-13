package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.ContactUs;
import com.example.demo.entities.Login;
import com.example.demo.entities.Vendor;
import com.example.demo.entities.VendorRegister;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class ContactUsController
{
	@Autowired
	JavaMailSender sender;
	
	@PostMapping("/contactus")
	public boolean contactus(@RequestBody ContactUs cs)
	{
		boolean response=true;
		SimpleMailMessage mailmessage=new SimpleMailMessage();
		try
		{
			  ContactUs us=new ContactUs(cs.getEmailid(),cs.getFullname(),cs.getBusinessName(),cs.getAddress(),cs.getContactno());
				
				mailmessage.setFrom(cs.getEmailid());
				mailmessage.setTo("eventodb79@gmail.com");
				mailmessage.setSubject("New vendor Registration details");
				mailmessage.setText("Emailid : "+cs.getEmailid()+"\n Full Name : "+cs.getFullname()+"\n Address : "+cs.getAddress()+"\n BusinessName :"+cs.getBusinessName()+"\n ContactNo : "+cs.getContactno());
				//mailmessage.setText();
				
				sender.send(mailmessage);
				
				
		}
		catch(Exception e)
		{
			response=false;
		}
		return response;		
	}
}
	
