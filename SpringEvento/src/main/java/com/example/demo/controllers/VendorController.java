package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Vendor;
import com.example.demo.entities.VendorRegister;
import com.example.demo.services.LoginService;
import com.example.demo.services.VendorService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class VendorController
{
	@Autowired
	VendorService vservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	JavaMailSender sender;
	
	@PostMapping("/vendorregister")
	public Vendor vendorregister(@RequestBody VendorRegister vr)
	{
		Vendor v1=null;

		System.out.println(vr);
		
		SimpleMailMessage mailmessage=new SimpleMailMessage();
		try
		{
			Login l=new Login(vr.getEmailid(),vr.getPwd(),"vendor",vr.getSec_ans(),vr.getSecid());
			Login inserted=lservice.add(l);
			
			Vendor v=new Vendor(vr.getVname(),vr.getBname(),vr.getContactno(),vr.getAddress(),inserted);	
			v1= vservice.add(v);
				
				mailmessage.setFrom("eventodb79@gmail.com");
				mailmessage.setTo(vr.getEmailid());
				mailmessage.setSubject("Welcome to Evento portal your login creditential are follwing");
				mailmessage.setText("Emailid : "+vr.getEmailid()+"\n Password : "+vr.getPwd());
				sender.send(mailmessage);
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
				
		return v1;
	}
	@GetMapping("/getinfo/{v_id}")
	public Vendor getByIdUsingPathVariable(@PathVariable("v_id") int v_id) 
	{
		return vservice.getById(v_id);
	}	
	
	
	@PostMapping("/update")
	public  Vendor venUpdate(@RequestBody Vendor vr)
	{
		Vendor v=new  Vendor(vr.getV_id(),vr.getVname(),vr.getB_name(),vr.getContact_no(),vr.getAddress());	
		return vservice.add(v);
	
	}	
	
}
