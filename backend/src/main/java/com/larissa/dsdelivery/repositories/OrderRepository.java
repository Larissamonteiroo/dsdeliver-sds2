package com.larissa.dsdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.larissa.dsdelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
