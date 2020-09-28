package com.hiddenc.hyun.search.dto;

import com.hiddenc.hyun.search.dto.ImageList;
import com.hiddenc.hyun.search.dto.ReviewList;

import java.util.List;

public class AllResult {

    // Cafe
    private int cafe_id;
    private String cafe_name;
    private String cafe_location;
    private String cafe_menu;
    private String cafe_information;
    private List<ImageList> cafe_image;
    private double cafe_rate;
    private String cafe_sns;
    private boolean is_enable_bean_choice;
    private int cafe_mood;
    private boolean is_enable_buy_bean;
    private boolean is_enable_handdrip;
    private String user_id;
    private List<ReviewList> reviewList;

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

    public List<ImageList> getCafe_image() {
        return cafe_image;
    }

    public void setCafe_image(List<ImageList> cafe_image) {
        this.cafe_image = cafe_image;
    }

    public double getCafe_rate() {
        return cafe_rate;
    }

    public void setCafe_rate(double cafe_rate) {
        this.cafe_rate = cafe_rate;
    }

    public String getCafe_sns() {
        return cafe_sns;
    }

    public void setCafe_sns(String cafe_sns) {
        this.cafe_sns = cafe_sns;
    }

    public boolean isIs_enable_bean_choice() {
        return is_enable_bean_choice;
    }

    public void setIs_enable_bean_choice(boolean is_enable_bean_choice) {
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

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public List<ReviewList> getReviewList() {
        return reviewList;
    }

    public void setReviewList(List<ReviewList> reviewList) {
        this.reviewList = reviewList;
    }
}
