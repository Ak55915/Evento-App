package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.EventReq;

@Transactional
@Repository
public interface EventRequestRepository extends JpaRepository<EventReq, Integer>
{
	@Query("select e from EventReq e where e.status='false'")
	public List<EventReq> getRequests();
	
	@Modifying
	@Query("update EventReq set status=?2,v_id=?3 where req_id=?1")
	public int updateRequest(int req_id,String status,int v_id);

}
