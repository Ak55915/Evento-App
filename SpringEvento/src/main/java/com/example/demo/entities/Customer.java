package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="customers")
public class Customer 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	int cust_id;
	
	@Column
	String fname;	
	
	@Column
	String lname;
	
	@Column
	String contact_no;
	
	@Column
	String address;
	

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	Login login_id;

	
	public Customer() 
	{
		super();
		// TODO Auto-generated constructor stub
	}


	public Customer(int cust_id, String fname, String lname, String contact_no, String address, Login login_id) 
	{
		super();
		this.cust_id = cust_id;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.address = address;
		this.login_id = login_id;
	}


	public Customer(String fname, String lname, String contact_no, String address, Login login_id)
	{
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.address = address;
		this.login_id = login_id;
	}
	
	/*public Customer(String fname, String lname, String contact_no, String address) 
	{
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.address = address;
	}*/


	public Customer(int cust_id, String fname, String lname, String contact_no, String address) {
		super();
		this.cust_id = cust_id;
		this.fname = fname;
		this.lname = lname;
		this.contact_no = contact_no;
		this.address = address;
	}


	public String getFname() {
		return fname;
	}


	public void setFname(String fname) {
		this.fname = fname;
	}


	public String getLname() {
		return lname;
	}


	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getContact_no() {
		return contact_no;
	}


	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public Login getLogin_id() {
		return login_id;
	}


	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}


	public int getCust_id() {
		return cust_id;
	}


	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}	
	
	
	
}
