package com.hiddenc.hyun.mypage.dto.LikeUserCafeList;

import java.util.List;

public class UserLikeListDto {

    private int push_user;
    private List<UserIdDto> user_id;
    private List<LikeCafeList> cafeList;


    public int getPush_user() {
        return push_user;
    }

    public void setPush_user(int push_user) {
        this.push_user = push_user;
    }

    public List<UserIdDto> getUser_id() {
        return user_id;
    }

    public void setUser_id(List<UserIdDto> user_id) {
        this.user_id = user_id;
    }

    public List<LikeCafeList> getCafeList() {
        return cafeList;
    }

    public void setCafeList(List<LikeCafeList> cafeList) {
        this.cafeList = cafeList;
    }
}
