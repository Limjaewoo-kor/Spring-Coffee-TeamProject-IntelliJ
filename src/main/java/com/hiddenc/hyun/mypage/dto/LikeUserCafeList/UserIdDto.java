package com.hiddenc.hyun.mypage.dto.LikeUserCafeList;

public class UserIdDto {

    @Override
    public String toString() {
        return "UserIdDto{" +
                "user_id='" + user_id + '\'' +
                ", user_pk=" + user_pk +
                '}';
    }

    private String user_id;
    private int user_pk;

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
}
