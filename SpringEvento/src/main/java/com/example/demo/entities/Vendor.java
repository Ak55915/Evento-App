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

	@Entity
	@Table(name="vendors")
	public class Vendor 
	{
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)	
		@Column
		int v_id;
		
		@Column(name="v_name")
		String vname;	
		
		@Column(name="b_name")
		String b_name;
		
		@Column
		String contact_no;
		
		@Column
		String address;
		

		@OneToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="login_id")
		Login login_id;

		

		public Vendor() 
		{
			super();
			// TODO Auto-generated constructor stub
		}

		public Vendor(int v_id, String vname, String b_name, String contact_no, String address) {
			super();
			this.v_id = v_id;
			this.vname = vname;
			this.b_name = b_name;
			this.contact_no = contact_no;
			this.address = address;
		}



		public Vendor(int v_id, String vname, String b_name, String contact_no, String address, Login login_id) {
			super();
			this.v_id = v_id;
			this.vname = vname;
			this.b_name = b_name;
			this.contact_no = contact_no;
			this.address = address;
			this.login_id = login_id;
		}



		public Vendor(String vname, String b_name, String contact_no, String address, Login login_id)
		{
			super();
			this.vname = vname;
			this.b_name = b_name;
			this.contact_no = contact_no;
			this.address = address;
			this.login_id = login_id;
		}



		public int getV_id() {
			return v_id;
		}



		public void setV_id(int v_id) {
			this.v_id = v_id;
		}

		public String getVname() {
			return vname;
		}



		public void setVname(String vname) {
			this.vname = vname;
		}



		public String getB_name() {
			return b_name;
		}



		public void setB_name(String b_name) {
			this.b_name = b_name;
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


		public void setAddress(String address)
		{
			this.address = address;
		}

		public Login getLogin_id() 
		{
			return login_id;
		}


		public void setLogin_id(Login login_id)
		{
			this.login_id = login_id;
		}
		
}
