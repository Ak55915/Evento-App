package com.example.demo.entities;

public class CustomerRegister
{
	String emailid;
	String pwd;
	String fname;
	String lname;
	int sec_id;
	String sec_ans;
	String contactno;
	String address;
	public CustomerRegister() 
	{
		super();
		// TODO Auto-generated constructor stub
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
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
	public int getSec_id() {
		return sec_id;
	}
	public void setSec_id(int sec_id) {
		this.sec_id = sec_id;
	}
	public String getSec_ans() {
		return sec_ans;
	}
	public void setSec_ans(String sec_ans) {
		this.sec_ans = sec_ans;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public CustomerRegister(String emailid, String pwd, String fname, String lname, int sec_id, String sec_ans,
			String contactno, String address) 
	{
		super();
		this.emailid = emailid;
		this.pwd = pwd;
		this.fname = fname;
		this.lname = lname;
		this.sec_id = sec_id;
		this.sec_ans = sec_ans;
		this.contactno = contactno;
		this.address = address;
	}
	
	
		
}
