package com.hiddenc.admin.beans;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class simpleCafeImg {

    private List<MultipartFile> cafe_image;
    private int cafe_id;

    public List<MultipartFile> getCafe_image() {
        return cafe_image;
    }

    public void setCafe_image(List<MultipartFile> cafe_image) {
        this.cafe_image = cafe_image;
    }

    public int getCafe_id() {
        return cafe_id;
    }

    public void setCafe_id(int cafe_id) {
        this.cafe_id = cafe_id;
    }
}
