package com.hiddenc.hyun.mypage.dto;

public class MypageMain {

    private String user_id;
    private int user_pk;
    private String user_bg_img;
    private String user_circle_img;
    private int user_like;
    private int total_visited;
    private int total_addcafe;
    private int user_caffeine;
    private int count_like;

    public int getCount_like() {
        return count_like;
    }

    public void setCount_like(int count_like) {
        this.count_like = count_like;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public int getUser_pk() {
        return user_pk;
    }

    public void setUser_pk(int user_pk) {
        this.user_pk = user_pk;
    }

    public int getUser_like() {
        return user_like;
    }

    public void setUser_like(int user_like) {
        this.user_like = user_like;
    }

    public String getUser_bg_img() {
        return user_bg_img;
    }

    public void setUser_bg_img(String user_bg_img) {
        this.user_bg_img = user_bg_img;
    }

    public String getUser_circle_img() {
        return user_circle_img;
    }

    public void setUser_circle_img(String user_circle_img) {
        this.user_circle_img = user_circle_img;
    }

    public int getUser_caffeine() {
        return user_caffeine;
    }

    public void setUser_caffeine(int user_caffeine) {
        this.user_caffeine = user_caffeine;
    }

    public int getTotal_visited() {
        return total_visited;
    }

    public void setTotal_visited(int total_visited) {
        this.total_visited = total_visited;
    }

    public int getTotal_addcafe() {
        return total_addcafe;
    }

    public void setTotal_addcafe(int total_addcafe) {
        this.total_addcafe = total_addcafe;
    }
}
