package com.hiddenc.hyun.mypage.dto;

import org.hibernate.validator.constraints.Length;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.Email;

public class GetImgDto {
    @Length(min = 8, max = 12)
    private String user_pw;
    private MultipartFile user_circle_img;
    private  MultipartFile user_bg_img;
    @Length(max = 20)
    private  String user_status;
    @Email
    private  String user_email;

    public String getUser_pw() {
        return user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public MultipartFile getUser_circle_img() {
        return user_circle_img;
    }

    public void setUser_circle_img(MultipartFile user_circle_img) {
        this.user_circle_img = user_circle_img;
    }

    public MultipartFile getUser_bg_img() {
        return user_bg_img;
    }

    public void setUser_bg_img(MultipartFile user_bg_img) {
        this.user_bg_img = user_bg_img;
    }

    public String getUser_status() {
        return user_status;
    }

    public void setUser_status(String user_status) {
        this.user_status = user_status;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }
}
