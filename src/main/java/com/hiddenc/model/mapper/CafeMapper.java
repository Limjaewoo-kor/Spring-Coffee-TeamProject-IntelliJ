package com.hiddenc.model.mapper;

import com.hiddenc.admin.beans.*;
import com.hiddenc.hyun.afterLoginMain.dto.SimpleCafeDto;
import com.hiddenc.hyun.search.dto.ImageList;
import com.hiddenc.hyun.search.dto.ReviewList;
import com.hiddenc.hyun.search.dto.SearchResultDto;
import com.hiddenc.hyun.search.dto.AllResult;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface CafeMapper {

    // 로그인 후 메인페이지 카페목록
    @Select("SELECT C.Cafe_ID, C.Cafe_Name, I.Cafe_Image FROM Cafe C LEFT JOIN Cafe_image I on C.Cafe_ID = I.Cafe_ID WHERE C.Is_Checked = true GROUP BY C.Cafe_ID")
    public List<SimpleCafeDto> selectCafeList();

    // 카페검색 - 검색결과
    @Select("SELECT C.Cafe_ID, C.Cafe_Name, C.Cafe_Location, Ci.Cafe_image FROM Cafe C LEFT JOIN Cafe_image Ci on C.Cafe_ID = Ci.Cafe_ID WHERE C.Is_Checked = true AND Cafe_Name LIKE CONCAT('%', #{cafe_name},'%') GROUP BY C.Cafe_ID")
    public List<SearchResultDto> selectSearchResult(SearchResultDto searchResultDto);


    // 카페검색 - 검색결과 - 상세페이지 출력 전 해당 카페의 평점을 가져와서 업데이트
    @Update("UPDATE Cafe C SET Cafe_Rate = (SELECT TRUNCATE(AVG(Rate), 1) AS Cafe_Rate FROM Review R WHERE R.Cafe_ID = #{cafe_id}) WHERE Cafe_ID = #{cafe_id}")
    public void updateCafeRate(AllResult allResult);

    // 카페검색 - 검색결과 - 상세페이지
    @Select("SELECT A.Cafe_ID, A.Cafe_Name, A.Cafe_Location, A.Cafe_Menu, A.Cafe_Information, A.Cafe_Rate, A.Cafe_Sns, A.Cafe_Rate, A.Is_Enable_Bean_Choice, A.Cafe_Mood, A.Is_Enable_Buy_Bean, A.Is_Enable_Handdrip, C.User_ID FROM Cafe A LEFT JOIN User C on A.User_ID = User_PK WHERE A.Cafe_ID = #{cafe_id} AND Is_Checked = true")
    public AllResult selectCafeInfo(AllResult allResult);

    // 카페검색 - 검색결과 - 상세페이지 - 리뷰
    @Select("SELECT A.Cafe_ID, A.Review, A.Review_img, A.Rate, U.User_ID FROM Review A LEFT JOIN User U on A.User_ID = U.User_PK WHERE Cafe_ID = #{cafe_id}")
    public List<ReviewList> selectReview(AllResult allResult);

    // 카페검색 - 검색결과 - 상세페이지 - 이미지
    @Select("SELECT Cafe_Image FROM Cafe_image LEFT JOIN Cafe C on Cafe_image.Cafe_ID = C.Cafe_ID WHERE C.Cafe_ID = #{cafe_id}")
    public List<ImageList> selectCafeImage(AllResult allResult);



    //유저 로그인 후

    @Select("SELECT * FROM Cafe WHERE Is_Checked = 1")
    public List<CafeBean> selectAllCafes(CafeBean cafeBean);

    @Select("SELECT * FROM Cafe_image WHERE Is_Checked = 1")
    public List<CafeImg> selectAllCafeimg(CafeImg cafeImg);

    @Select("SELECT * FROM Review")
    public List<Review> selectAllReview(Review review);

    @Select("SELECT Cafe_ID, Cafe_Name, Cafe_Location FROM Cafe")
    public List<getCafeBean> getCafe(getCafeBean getCafeBean);

    //어드민 카페등록

    @Insert("INSERT INTO Cafe(Cafe_Name, Cafe_Location, Cafe_Menu, Cafe_Information, Is_Enable_Bean_Choice, Cafe_Mood, Is_Enable_Buy_Bean, Is_Enable_Handdrip,Is_Checked, User_ID, Cafe_Sns)VALUES (#{cafe_name},  #{cafe_location}, #{cafe_menu}, #{cafe_information},#{is_enable_bean_choice},#{cafe_mood},#{is_enable_buy_bean},#{is_enable_handdrip},true,'1',#{cafe_sns})")
    public void addCafe(CafeBean cafeBean);

    //어드민 카페등록 카페 이미지
    @Insert("INSERT INTO Cafe_image (Cafe_image, Cafe_ID, Is_Checked) VALUE (#{cafe_image},#{cafe_id},#{is_checked})")
    public void addCafeImage(CafeImg cafeImg);

    @Select("SELECT Cafe_ID FROM Cafe WHERE User_ID = #{user_id} ORDER BY Cafe_ID DESC LIMIT 1")
    public int cafeid(CafeBean cafeBean);

    //어드림 유저 카페 등록 요청
    @Select("SELECT A.User_ID, A.User_Circle_img, B.Cafe_ID,B.Cafe_Name, B.Cafe_Location, B.Cafe_Menu, B.Cafe_Information, B.Is_Enable_Bean_Choice, B.Cafe_Mood, B.Is_Enable_Buy_Bean, B.Is_Enable_Handdrip,B.Is_Checked, B.User_ID,B.Cafe_Rate,B.Cafe_Sns FROM Cafe B JOIN coffee.User A ON  A.User_PK = B.User_ID AND B.Is_Checked = 0")
    public List<ByUserBean> selectbyusers(ByUserBean byUserBean);

    @Select("SELECT Cafe_image, Cafe_ID FROM Cafe_image WHERE Is_Checked = 0;")
    public List<CafeImg> selectbyuserimage(CafeImg cafeImg);

    //어드민 유저 카페 등록 수락
    @Update("UPDATE Cafe SET Cafe_Name = #{cafe_name}, Cafe_Location = #{cafe_location}, Cafe_Menu = #{cafe_menu}, Cafe_Information = #{cafe_information}, Is_Enable_Bean_Choice = #{is_enable_bean_choice}, Cafe_Mood = #{cafe_mood}, Is_Enable_Buy_Bean = #{is_enable_buy_bean}, Is_Enable_Handdrip = #{is_enable_handdrip}, Is_Checked = #{is_checked}, Cafe_Sns = #{cafe_sns} WHERE Cafe_ID = #{cafe_id}")
    public void updatebyuser(CafeBean cafeBean);

    @Select("SELECT Cafe_image FROM Cafe_image WHERE Cafe_ID = #{cafe_id}")
    public List<OnlyCafeimg> selimg(CafeImg cafeImg);

    @Delete("DELETE FROM Cafe_image WHERE Cafe_ID = #{cafe_id}")
    public void delimg(CafeImg cafeImg);

    @Insert("INSERT INTO Cafe_image (Cafe_image, Cafe_ID, Is_Checked) VALUE (#{cafe_image},#{cafe_id},#{is_checked})")
    public void inimg(CafeImg cafeImg);

    //어드민 카페 삭제
    @Delete("DELETE FROM Cafe WHERE Cafe_ID = #{cafe_id}")
    public void delcafe(CafeImg cafeImg);



}