package com.hiddenc.hyun.signupLogin.dto;

public class MainPage {

    // 로그인 후 메인페이지 - 등록된 카페 리스트
    private int cafe_id;
    private String cafe_name;
    private String cafe_image;

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

    public String getCafe_image() {
        return cafe_image;
    }

    public void setCafe_image(String cafe_image) {
        this.cafe_image = cafe_image;
    }
}
