package com.example.email.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class EmailDto {
    @NotBlank
    private String ownerRef = "Laura";
    @NotBlank
    @Email
    private String emailFrom = "lauraatamari@gmail.com";
    @NotBlank
    @Email
    private String emailTo = "fiapteste.checkpoint@gmail.com";
    @NotBlank
    private String subject = "Cadastro de produto";
    @NotBlank
    private String text = "Produto foi cadastrado com sucesso!";
}