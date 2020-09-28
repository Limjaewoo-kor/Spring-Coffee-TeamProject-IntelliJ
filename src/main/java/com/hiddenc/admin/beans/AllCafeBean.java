package com.hiddenc.admin.beans;

import com.hiddenc.hyun.afterLoginMain.dto.TopCaffeine;

import java.util.List;

public class AllCafeBean {

    private String user_id;
    private String user_circle_img;
    private List<CafeBean> cafebean;
    private List<CafeImg> cafeimg;
    private List<Review> review;
    private List<TopCaffeine> topCaffeines;

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_circle_img() {
        return user_circle_img;
    }

    public void setUser_circle_img(String user_circle_img) {
        this.user_circle_img = user_circle_img;
    }

    public List<TopCaffeine> getTopCaffeines() {
        return topCaffeines;
    }

    public void setTopCaffeines(List<TopCaffeine> topCaffeines) {
        this.topCaffeines = topCaffeines;
    }

    public List<Review> getReview() {
        return review;
    }

    public void setReview(List<Review> review) {
        this.review = review;
    }

    public List<CafeBean> getCafebean() {
        return cafebean;
    }

    public void setCafebean(List<CafeBean> cafebean) {
        this.cafebean = cafebean;
    }

    public List<CafeImg> getCafeimg() {
        return cafeimg;
    }

    public void setCafeimg(List<CafeImg> cafeimg) {
        this.cafeimg = cafeimg;
    }
}
