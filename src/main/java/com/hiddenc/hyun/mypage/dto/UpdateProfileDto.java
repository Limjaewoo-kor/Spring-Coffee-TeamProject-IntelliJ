package com.hiddenc.hyun.mypage.dto;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

public class UpdateProfileDto {

    private String user_id;

    @NotBlank
    @Length(min = 8, max = 12)
    private String user_pw;
    private String user_circle_img;
    private String user_bg_img;
    private String user_status;
    private String user_email;


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

    public String getUser_circle_img() {
        return user_circle_img;
    }

    public void setUser_circle_img(String user_circle_img) {
        this.user_circle_img = user_circle_img;
    }

    public String getUser_bg_img() {
        return user_bg_img;
    }

    public void setUser_bg_img(String user_bg_img) {
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
