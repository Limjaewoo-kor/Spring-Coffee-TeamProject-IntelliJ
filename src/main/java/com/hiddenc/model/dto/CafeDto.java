package com.hiddenc.model.dto;

public class CafeDto {
    private int cafe_id;
    private String cafe_name;
    private String cafe_location;
    private String cafe_menu;
    private String cafe_information;
    private String cafe_image;
    private double cafe_rate;
    private double is_enable_bean_choice;
    private int cafe_mood;
    private boolean is_enable_buy_bean;
    private boolean is_enable_handdrip;
    private boolean is_checked;

    public int getCafe_id() {
        return cafe_id;
    }

    public void setCafe_id(int cafe_id) {
        this.cafe_id = cafe_id;
    }

    public String getCafe_name() {
        return cafe_name;
    }

    public void setCafe_name(String cafe_name) {
        this.cafe_name = cafe_name;
    }

    public String getCafe_location() {
        return cafe_location;
    }

    public void setCafe_location(String cafe_location) {
        this.cafe_location = cafe_location;
    }

    public String getCafe_menu() {
        return cafe_menu;
    }

    public void setCafe_menu(String cafe_menu) {
        this.cafe_menu = cafe_menu;
    }

    public String getCafe_information() {
        return cafe_information;
    }

    public void setCafe_information(String cafe_information) {
        this.cafe_information = cafe_information;
    }

    public String getCafe_image() {
        return cafe_image;
    }

    public void setCafe_image(String cafe_image) {
        this.cafe_image = cafe_image;
    }

    public double getCafe_rate() {
        return cafe_rate;
    }

    public void setCafe_rate(double cafe_rate) {
        this.cafe_rate = cafe_rate;
    }

    public double getIs_enable_bean_choice() {
        return is_enable_bean_choice;
    }

    public void setIs_enable_bean_choice(double is_enable_bean_choice) {
        this.is_enable_bean_choice = is_enable_bean_choice;
    }

    public int getCafe_mood() {
        return cafe_mood;
    }

    public void setCafe_mood(int cafe_mood) {
        this.cafe_mood = cafe_mood;
    }

    public boolean isIs_enable_buy_bean() {
        return is_enable_buy_bean;
    }

    public void setIs_enable_buy_bean(boolean is_enable_buy_bean) {
        this.is_enable_buy_bean = is_enable_buy_bean;
    }

    public boolean isIs_enable_handdrip() {
        return is_enable_handdrip;
    }

    public void setIs_enable_handdrip(boolean is_enable_handdrip) {
        this.is_enable_handdrip = is_enable_handdrip;
    }

    public boolean isIs_checked() {
        return is_checked;
    }

    public void setIs_checked(boolean is_checked) {
        this.is_checked = is_checked;
    }
}
