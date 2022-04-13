package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Event;
import com.example.demo.entities.Service1;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> 
{
	@Query(value="select e.eid,e.ename,e.price,e.add_on_price,e.description,e.no_of_guest from events e inner join event_service es on e.eid=es.eid inner join services s on es.sid=s.sid where e.eid=?1",nativeQuery=true)
	public List<Event> getdetails(int eid);
}
