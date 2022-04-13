package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Service1;

@Repository
public interface ServiceRepo extends JpaRepository<Service1, Integer>
{
	@Query(value="select * from services s inner join event_service es on s.sid=es.sid inner join events e on es.eid=e.eid where e.eid=?1",nativeQuery=true)
	public List<Service1> getdetails(int eid);
}
