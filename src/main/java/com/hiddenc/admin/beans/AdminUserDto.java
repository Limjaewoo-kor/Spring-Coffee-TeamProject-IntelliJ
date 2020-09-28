package com.hiddenc.admin.beans;

public class AdminUserDto {

    // Field
    private int user_pk;
    private String user_id;
    private String user_pw;
    private String user_name;
    private String user_email;
    private boolean user_gender;
    private String user_birth;
   private String user_Bg_img;
   private String user_Circle_img;
    private String user_status;
    private int user_like;
    private int user_caffeine;
    private int count_expose_main;
    private int count_accepted_cafe;
    private boolean is_blocked_user;




    // Getter Setter


    public int getUser_pk() {
        return user_pk;
    }

    public void setUser_pk(int user_pk) {
        this.user_pk = user_pk;
    }

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

    public String getUser_Bg_img() {
        return user_Bg_img;
    }

    public void setUser_Bg_img(String user_Bg_img) {
        this.user_Bg_img = user_Bg_img;
    }

    public String getUser_Circle_img() {
        return user_Circle_img;
    }

    public void setUser_Circle_img(String user_Circle_img) {
        this.user_Circle_img = user_Circle_img;
    }

    public String getUser_status() {
        return user_status;
    }

    public void setUser_status(String user_status) {
        this.user_status = user_status;
    }

    public int getUser_like() {
        return user_like;
    }

    public void setUser_like(int user_like) {
        this.user_like = user_like;
    }

    public int getUser_caffeine() {
        return user_caffeine;
    }

    public void setUser_caffeine(int user_caffeine) {
        this.user_caffeine = user_caffeine;
    }

    public int getCount_expose_main() {
        return count_expose_main;
    }

    public void setCount_expose_main(int count_expose_main) {
        this.count_expose_main = count_expose_main;
    }

    public int getCount_accepted_cafe() {
        return count_accepted_cafe;
    }

    public void setCount_accepted_cafe(int count_accepted_cafe) {
        this.count_accepted_cafe = count_accepted_cafe;
    }

    public boolean isIs_blocked_user() {
        return is_blocked_user;
    }

    public void setIs_blocked_user(boolean is_blocked_user) {
        this.is_blocked_user = is_blocked_user;
    }
}
