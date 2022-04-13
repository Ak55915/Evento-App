package com.example.demo.entities;

public class VendorRegister 
{
	String emailid;
	String pwd;
	String vname;
	String bname;
	int secid;
	String sec_ans;
	String contactno;
	String address;
	public VendorRegister() 
	{
		super();
		// TODO Auto-generated constructor stub
	}
	public VendorRegister(String emailid, String pwd, String vname, String bname, int secid, String sec_ans,
			String contactno, String address) {
		super();
		this.emailid = emailid;
		this.pwd = pwd;
		this.vname = vname;
		this.bname = bname;
		this.secid = secid;
		this.sec_ans = sec_ans;
		this.contactno = contactno;
		this.address = address;
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
	public String getVname() {
		return vname;
	}
	public void setVname(String vname) {
		this.vname = vname;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public int getSecid() {
		return secid;
	}
	public void setSecid(int secid) {
		this.secid = secid;
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
	@Override
	public String toString() {
		return "VendorRegister [emailid=" + emailid + ", pwd=" + pwd + ", vname=" + vname + ", bname=" + bname
				+ ", secid=" + secid + ", sec_ans=" + sec_ans + ", contactno=" + contactno + ", address=" + address
				+ "]";
	}
	
}
