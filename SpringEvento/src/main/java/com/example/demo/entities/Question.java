package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="questions")
public class Question
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	@Column(name="sec_id")
	int secid;
	
	@Column
	String sec_ques;
	
	public Question()
	{
		super();
		// TODO Auto-generated constructor stub
	}



	public Question(String sec_ques)
	{
		super();
		
		this.sec_ques = sec_ques;
	}



	public int getSec_id()
	{
		return secid;
	}

	public void setSec_id(int secid) 
	{
		secid = secid;
	}

	public String getSec_ques()
	{
		return sec_ques;
	}

	public void setSec_ques(String sec_ques) 
	{
		this.sec_ques = sec_ques;
	}
		
}
