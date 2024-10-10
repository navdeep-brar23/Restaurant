package com.example.login_system.repository;

import com.example.login_system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom query methods if needed
    User findByUsername(String username);
}
