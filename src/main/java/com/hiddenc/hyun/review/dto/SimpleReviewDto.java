package com.hiddenc.hyun.review.dto;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

public class SimpleReviewDto {

    @NotBlank
    @Length(max = 30)
    private String review;

    @Range(min = 1, max = 5)
    private int rate;

    private MultipartFile review_img;
    private int cafe_id;
    private int user_id;

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public MultipartFile getReview_img() {
        return review_img;
    }

    public void setReview_img(MultipartFile review_img) {
        this.review_img = review_img;
    }

    public int getCafe_id() {
        return cafe_id;
    }

    public void setCafe_id(int cafe_id) {
        this.cafe_id = cafe_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
