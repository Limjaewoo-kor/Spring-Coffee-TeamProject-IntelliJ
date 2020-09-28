package com.hiddenc.admin.beans;


import lombok.Data;

@Data
public class CafeBean {
    private int cafe_id;
    private String cafe_name;
    private String cafe_location;
    private String cafe_menu;
    private String cafe_information;
    private Boolean is_enable_bean_choice;
    private int cafe_mood;
    private Boolean is_enable_buy_bean;
    private Boolean is_enable_handdrip;
    private Boolean is_checked;
    private int user_id;
    private double cafe_rate;
    private String cafe_sns;


//    public static CafeBean createCafeBean(SimpleCafeBean simpleCafeBean){
//        CafeBean cafeBean = new CafeBean();
//
//        cafeBean.is_checked=true;
//
//        return cafeBean;
//    }

    //    public int getCafe_id() {
//        return cafe_id;
//    }
//
//    public void setCafe_id(int cafe_id) {
//        this.cafe_id = cafe_id;
//    }
//
//    public String getCafe_name() {
//        return cafe_name;
//    }
//
//    public void setCafe_name(String cafe_name) {
//        this.cafe_name = cafe_name;
//    }
//
//    public String getCafe_location() {
//        return cafe_location;
//    }
//
//    public void setCafe_location(String cafe_location) {
//        this.cafe_location = cafe_location;
//    }
//
//    public String getCafe_menu() {
//        return cafe_menu;
//    }
//
//    public void setCafe_menu(String cafe_menu) {
//        this.cafe_menu = cafe_menu;
//    }
//
//    public String getCafe_information() {
//        return cafe_information;
//    }
//
//    public void setCafe_information(String cafe_information) {
//        this.cafe_information = cafe_information;
//    }
//
//    public Boolean getIs_enable_bean_choice() {
//        return is_enable_bean_choice;
//    }
//
//    public void setIs_enable_bean_choice(Boolean is_enable_bean_choice) {
//        this.is_enable_bean_choice = is_enable_bean_choice;
//    }
//
//    public int getCafe_mood() {
//        return cafe_mood;
//    }
//
//    public void setCafe_mood(int cafe_mood) {
//        this.cafe_mood = cafe_mood;
//    }
//
//    public Boolean getIs_enable_buy_bean() {
//        return is_enable_buy_bean;
//    }
//
//    public void setIs_enable_buy_bean(Boolean is_enable_buy_bean) {
//        this.is_enable_buy_bean = is_enable_buy_bean;
//    }
//
//    public Boolean getIs_enable_handdrip() { return is_enable_handdrip; }
//
//    public void setIs_enable_handdrip(Boolean is_enable_handdrip) {
//        this.is_enable_handdrip = is_enable_handdrip;
//    }
//
//    public Boolean getIs_checked() {
//        return is_checked;
//    }
//
//    public void setIs_checked(Boolean is_checked) {
//        this.is_checked = is_checked;
//    }
//
//    public int getUser_id() {
//        return user_id;
//    }
//
//    public void setUser_id(int user_id) {
//        this.user_id = user_id;
//    }
//
//    public double getCafe_rate() {
//        return cafe_rate;
//    }
//
//    public void setCafe_rate(double cafe_rate) {
//        this.cafe_rate = cafe_rate;
//    }
//
//    public String getCafe_sns() {
//        return cafe_sns;
//    }
//
//    public void setCafe_sns(String cafe_sns) {
//        this.cafe_sns = cafe_sns;
//    }
}