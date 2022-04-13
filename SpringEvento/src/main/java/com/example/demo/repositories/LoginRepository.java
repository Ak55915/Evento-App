package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;


@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
	@Query("select l from Login l where email_id=?1 and password=?2")
	public Login loginCheck(String uid,String pwd);

}
