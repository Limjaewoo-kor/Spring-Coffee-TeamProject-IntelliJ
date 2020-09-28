package com.hiddenc.model.mapper;

import com.hiddenc.admin.beans.AdminUserBean;
import com.hiddenc.admin.beans.AdminUserDto;
import com.hiddenc.hyun.afterLoginMain.dto.TopCaffeine;
import com.hiddenc.hyun.mypage.dto.LikeUserCafeList.LikeCafeList;
import com.hiddenc.hyun.mypage.dto.LikeUserCafeList.UserIdDto;
import com.hiddenc.hyun.mypage.dto.LikeUserCafeList.UserLikeListDto;
import com.hiddenc.hyun.mypage.dto.MypageMain;
import com.hiddenc.hyun.mypage.dto.UpdateProfileDto;
import com.hiddenc.hyun.mypage.dto.WithdrawUserDto;
import com.hiddenc.hyun.signupLogin.dto.SimpleUserDto;
import com.hiddenc.model.dto.UserDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface UserMapper {

    // 회원가입
    @Insert("INSERT INTO User(User_ID, User_PW, User_Name, User_Email, User_Gender, User_Birth) VALUES (#{user_id}, #{user_pw}, #{user_name}, #{user_email}, #{user_gender}, #{user_birth})")
    public void insertUser(SimpleUserDto simpleUserDto);

    // 회원가입 - 아이디 중복검사
    @Select("SELECT EXISTS(SELECT User_ID FROM User WHERE User_ID = #{user_id});")
    public int duplicateInspection(SimpleUserDto simpleUserDto);


    // 로그인
    @Select("SELECT User_ID FROM User WHERE User_ID = #{user_id}")
    public String selectUserID(UserDto userDto);

    @Select("SELECT User_PW FROM User WHERE User_ID = #{user_id}")
    public String selectUserPW(UserDto userDto);

    // 로그인 - 해당 유저 기본키 가져오기
    @Select("SELECT User_PK FROM User WHERE User_ID = #{user_id}")
    public int selectUserPK(UserDto userDto);

    // 카페검색 - 검색화면메인
    @Select("SELECT User_Bg_img FROM User WHERE User_ID = #{user_id}")
    public String selectUserBgImage(UserDto userDto);

    @Select("SELECT  User_Circle_img FROM User WHERE User_ID = #{user_id}")
    public String selectUserCircleImage(UserDto userDto);

    // 마이페이지 - 프로필 수정 - circle 사진변경
    @Update("UPDATE User SET User_Circle_img = #{user_circle_img} WHERE User_ID = #{user_id}")
    public void updateUserProfileCirclePic(UpdateProfileDto updateProfileDto);

    // 마이페이지 - 프로필 수정 - bg 사진변경
    @Update("UPDATE User SET User_Bg_img = #{user_bg_img} WHERE User_ID = #{user_id}")
    public void updateUserProfileBgPic(UpdateProfileDto updateProfileDto);

    // 마이페이지 - 프로필 수정 - 비밀번호변경
    @Update("UPDATE User SET User_PW = #{user_pw} WHERE User_ID = #{user_id}")
    public void updateUserPW(UpdateProfileDto updateProfileDto);

    // 마이페이지 - 프로필 수정 - 상태메시지변경
    @Update("UPDATE User SET User_Status = #{user_status} WHERE User_ID = #{user_id}")
    public void updateUserStatus(UpdateProfileDto updateProfileDto);

    // 마이페이지 - 프로필 수정 - 이메일변경
    @Update("UPDATE User SET User_Email = #{user_email} WHERE User_ID = #{user_id}")
    public void updateUserEmail(UpdateProfileDto updateProfileDto);

    // 개인페이지 - 내가 좋아요를 누른 유저 목록
    @Select("SELECT U.User_ID, U.User_PK FROM `Like` LEFT JOIN User U on `Like`.Got_Like = U.User_PK WHERE Push_User = #{push_user}")
    public List<UserIdDto> selectUserLike(UserLikeListDto userLikeListDto);

    // 개인페이지 - 내가 좋아요를 누른 유저의 방문 카페와 개인키
    @Select("SELECT C.Cafe_ID, C.Cafe_Name, C.Cafe_Location, I.Cafe_Image, VL.User_PK FROM Cafe C LEFT JOIN VisitLog VL ON C.Cafe_ID = VL.Cafe_ID LEFT JOIN `Like` L ON Got_Like = User_PK LEFT JOIN Cafe_image I on C.Cafe_ID = I.Cafe_ID WHERE Push_User = #{push_user} GROUP BY C.Cafe_ID")
    public List<LikeCafeList> selectUserLikeCafeList(UserLikeListDto userLikeListDto);

    // 개인페이지 - 메인페이지 - UserLike개수 가져오기
    @Select("SELECT COUNT(User_PK) AS user_like FROM `Like` LEFT JOIN User ON Got_Like = User_PK WHERE Got_Like = #{user_pk}")
    public int selectUSerLike(MypageMain mypageMain);

    // 개인페이지 - 메인페이지 - 내가 방문한 카페의 수 가져오기(total_visited)
    @Select("SELECT COUNT(V.User_PK) AS total_visited FROM VisitLog V LEFT JOIN User U on V.User_PK = U.User_PK WHERE V.User_PK = #{user_pk}")
    public int selectTotlaVisited(MypageMain mypageMain);

    // 개인페이지 - 메인페이지 - 내가 등록한 카페의 수 가져오기(total_addcafe)
    @Select("SELECT COUNT(User_ID) AS total_addcafe FROM Cafe WHERE User_ID = #{user_pk}")
    public int selectTotalAddcafe(MypageMain mypageMain);

    // 개인페이지 - 메인페이지 - User_circle_img 가져오기
    @Select("SELECT User_Circle_img FROM USER WHERE User_PK = #{user_pk}")
    public String selectMypageUserCircleImage(MypageMain mypageMain);

    // 개인페이지 - 메인페이지 - User_bg_img 가져오기
    @Select("SELECT User_Bg_img FROM USER WHERE User_PK = #{user_pk}")
    public String selectMypageUserBgImage(MypageMain mypageMain);

    // 개인페이지 - 메인페이지 - 필요한 리턴값으로 DB에 다시 업데이트
    @Update("UPDATE User SET User_Like = #{user_like}, User_Caffeine = #{user_caffeine}, Count_Accepted_Cafe = #{total_addcafe} WHERE User_PK = #{user_pk}")
    public void updateUserMypage(MypageMain mypageMain);

//    //어드민 회원 관리
//    @Select("SELECT User_ID, User_Name, User_Caffeine, Is_Blocked_User,User_Bg_img, User_Circle_img  FROM User ")
//    public List<AdminUserBean> selectUsers();

        //어드민 회원 관리
    @Select("SELECT User_ID, User_Name, User_Caffeine, Is_Blocked_User  FROM User ")
    public List<AdminUserBean> selectUsers();

    // 마이페이지 - 회원탈퇴 - 해당 유저가 등록한 카페를 관리자 등록으로 변경
    @Update("UPDATE Cafe SET User_ID = 1 WHERE User_ID = #{user_pk}")
    public void updateUserCafeToAdmin(WithdrawUserDto withdrawUserDto);


    // 마이페이지 - 회원탈퇴 - 해당유저의 기본키로 삭제 처리
    @Delete("DELETE FROM User WHERE User_PK = #{user_pk}")
    public void deleteUser(WithdrawUserDto withdrawUserDto);

    //어드민 유저 블락
    @Update("UPDATE User SET Is_Blocked_User=true WHERE User_PK = #{user_pk}")
    public void blockUser(AdminUserDto adminUserDto);

    //어드민 유저 블락 해제
    @Update("UPDATE User SET Is_Blocked_User=false WHERE User_PK = #{user_pk}")
    public void unlockUser(AdminUserDto adminUserDto);

    //어드민 블락 유저 조회
    @Select("SELECT * FROM User WHERE Is_Blocked_User = true")
    public List<AdminUserDto> selectblockusers();

    //어드민 특별한 사용자 지정
    @Update("UPDATE User SET Is_SpecialUser= true WHERE User_PK = #{user_pk}")
    public void specialuserdesignation(AdminUserDto adminUserDto);

    //어드민 특별한 사용자 지정 해제
    @Update("UPDATE User SET Is_SpecialUser= false WHERE User_PK = #{user_pk}")
    public void unspecialusers(AdminUserDto adminUserDto);

    //어드민 특별한 사용자 조회
    @Select("SELECT * FROM User WHERE Is_SpecialUser = true")
    public List<AdminUserDto> selectspecialuser();

    //로그인시 블락 유저 조회
    @Select("SELECT Is_Blocked_User FROM User WHERE User_ID = #{user_id}")
    public Boolean loginblockusers(SimpleUserDto simpleUserDto);

    @Select("SELECT User_ID, User_Circle_img, User_Caffeine FROM User ORDER BY User_Caffeine DESC LIMIT 12")
    public List<TopCaffeine> selectTopCaffeine();

    @Update("UPDATE User SET User_Caffeine = User_Caffeine + (#{user_caffeine}) WHERE User_PK = #{user_idpk}")
    public void updateCaffeine(UserDto userDto);

    // 개인페이지 - 메인페이지 - 내가 Follow하고 있는 유저의 수 가져오기
    @Select("SELECT COUNT(Got_Like) AS count_like FROM `Like`WHERE Push_User = #{user_pk}")
    public int selectCountLike(MypageMain mypageMain);
}