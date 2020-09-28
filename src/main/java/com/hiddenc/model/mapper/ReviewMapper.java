package com.hiddenc.model.mapper;

import com.hiddenc.hyun.review.dto.ReviewDto;
import com.hiddenc.hyun.review.dto.ReviewImg;
import com.hiddenc.hyun.review.dto.SimpleReviewDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ReviewMapper {

    // 리뷰등록
    @Insert("INSERT INTO Review(Review, Rate, Review_img, Cafe_ID, User_ID) VALUE (#{review}, #{rate}, #{review_img}, #{cafe_id}, #{user_id})")
    public void insertReview(ReviewDto reviewDto);

    // 본인이 방문한 카페인지 확인
    @Select("SELECT EXISTS (SELECT * FROM VisitLog WHERE Cafe_ID = #{cafe_id} AND User_PK = #{user_id}) AS visit")
    public int checkVisitLog(SimpleReviewDto simpleReviewDto);

    // 해당 카페 리뷰를 이미 작성하였는지 확인
    @Select("SELECT EXISTS (SELECT * FROM Review WHERE Cafe_ID = #{cafe_id} AND User_ID = #{user_id}) AS hasReview")
    public int hasReview(SimpleReviewDto simpleReviewDto);

    // 본인이 작성한 리뷰 삭제
    @Delete("DELETE FROM Review WHERE Cafe_ID = #{cafe_id} AND User_ID = #{user_id}")
    public void deleteReview(ReviewDto reviewDto);

    @Select("SELECT Review_img FROM Review WHERE Cafe_ID = #{cafe_id} AND User_ID = #{user_id}")
    public String selimgReview(ReviewImg reviewImg);

}
