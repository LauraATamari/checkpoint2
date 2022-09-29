package com.example.email.models;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.email.enums.StatusEmail;

import lombok.Data;

@Data
@Entity
@Table(name = "email")
public class EmailModel implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long emailId;
    private String ownerRef = "Laura";
    private String emailFrom = "fiapteste.checkpoint@gmail.com";
    private String emailTo = "lauraatamari@gmail.com";
    private String subject = "Cadastro de produto";
    @Column(columnDefinition = "TEXT")
    private String text = "Produto cadastrado com sucesso!";
    private LocalDateTime sendDateEmail;
    private StatusEmail statusEmail;
}
