package com.example.email.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.email.models.EmailModel;

public interface EmailRepository extends MongoRepository<EmailModel, Long>{
    
}
