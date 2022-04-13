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
@Table(name="logins")
public class Login 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	int login_id;
	
	@Column
	String email_id;
	
	@Column
	String password;
	
	@Column
	String role;
	
	@Column
	String sec_ans;
	
	@Column
	int sec_id;
	
	
	public Login()
	{
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Login(String email_id, String password) {
		super();
		this.email_id = email_id;
		this.password = password;
	}


	public Login(String email_id, String password, String role, String sec_ans,int sec_id) 
	{
		super();
		this.email_id = email_id;
		this.password = password;
		this.role = role;
		this.sec_ans = sec_ans;
		this.sec_id=sec_id;
		
	}
	

	public Login(int login_id, String email_id, String password, String role, String sec_ans, int sec_id) {
		super();
		this.login_id = login_id;
		this.email_id = email_id;
		this.password = password;
		this.role = role;
		this.sec_ans = sec_ans;
		this.sec_id = sec_id;
	}


	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}
	

	public int getLogin_id() {
		return login_id;
	}


	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}


	public String getSec_ans() {
		return sec_ans;
	}


	public void setSec_ans(String sec_ans) {
		this.sec_ans = sec_ans;
	}


	public void setRole(String role) {
		this.role = role;
	}

	public int getSec_id() {
		return sec_id;
	}

	public void setSec_id(int sec_id) {
		this.sec_id = sec_id;
	}

	public String getAnswer() 
	{
		return sec_ans;
	}

	public void setAnswer(String sec_ans) {
		this.sec_ans = sec_ans;
	}


	@Override
	public String toString() {
		return "Login [login_id=" + login_id + ", email_id=" + email_id + ", password=" + password + ", role=" + role
				+ ", sec_ans=" + sec_ans + ", sec_id=" + sec_id + "]";
	}
	
	
}
