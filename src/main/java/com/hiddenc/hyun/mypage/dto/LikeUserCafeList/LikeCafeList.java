package com.hiddenc.hyun.mypage.dto.LikeUserCafeList;

public class LikeCafeList {

    private int cafe_id;
    private String cafe_name;
    private String cafe_location;
    private String cafe_image;
    private int user_pk;

    @Override
    public String toString() {
        return "LikeCafeList{" +
                "cafe_id=" + cafe_id +
                ", cafe_name='" + cafe_name + '\'' +
                ", cafe_location='" + cafe_location + '\'' +
                ", cafe_image='" + cafe_image + '\'' +
                ", user_pk=" + user_pk +
                '}';
    }

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

    public String getCafe_image() {
        return cafe_image;
    }

    public void setCafe_image(String cafe_image) {
        this.cafe_image = cafe_image;
    }

    public int getUser_pk() {
        return user_pk;
    }

    public void setUser_pk(int user_pk) {
        this.user_pk = user_pk;
    }
}
