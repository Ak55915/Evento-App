package com.example.demo.entities;

public class ContactUs
{
	 String emailid;
	 
	 String fullname;
	 
	 String businessName;
	 
	 String address;
	 
	 String contactno;
	 
	 

	public ContactUs() 
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public ContactUs(String emailid, String fullName, String businessName, String address, String contactno) {
		super();
		this.emailid = emailid;
		this.fullname = fullName;
		this.businessName = businessName;
		this.address = address;
		this.contactno = contactno;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	 
	 
}
