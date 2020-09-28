package com.hiddenc.hyun.signupLogin.dto;

import org.hibernate.validator.constraints.Length;
import org.springframework.stereotype.Repository;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Repository
public class SimpleUserDto { // 회원가입


    @Override
    public String toString() {
        return "SimpleUserDto{" +
                "user_id='" + user_id + '\'' +
                ", user_pw='" + user_pw + '\'' +
                ", user_name='" + user_name + '\'' +
                ", user_email='" + user_email + '\'' +
                ", user_gender=" + user_gender +
                ", user_birth='" + user_birth + '\'' +
                '}';
    }

    @NotBlank
    @Length(min = 3, max = 12)
    private String user_id;

    @NotBlank
    @Length(min = 8, max = 12)
    private String user_pw;

    @NotBlank
    @Length(max = 5)
    private String user_name;

    @NotBlank
    @Email
    private String user_email;

    private boolean user_gender;

    @NotBlank
    private String user_birth;

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_pw() {
        return user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public boolean isUser_gender() {
        return user_gender;
    }

    public void setUser_gender(boolean user_gender) {
        this.user_gender = user_gender;
    }

    public String getUser_birth() {
        return user_birth;
    }

    public void setUser_birth(String user_birth) {
        this.user_birth = user_birth;
    }
}
