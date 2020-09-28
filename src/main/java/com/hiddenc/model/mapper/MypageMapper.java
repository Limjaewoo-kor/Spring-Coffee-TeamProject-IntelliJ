package com.hiddenc.model.mapper;

import com.hiddenc.admin.beans.CafeBean;
import com.hiddenc.hyun.mypage.dto.CafeAddBean;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;


public interface MypageMapper {



    //개인페이지 카페 신규 등록 요청

    @Insert("INSERT INTO Cafe(Cafe_Name, Cafe_Location, Cafe_Menu, Cafe_Information, Is_Enable_Bean_Choice, Cafe_Mood, Is_Enable_Buy_Bean, Is_Enable_Handdrip,Is_Checked, User_ID, Cafe_Sns)VALUES (#{cafe_name},  #{cafe_location}, #{cafe_menu}, #{cafe_information},#{is_enable_bean_choice},#{cafe_mood},#{is_enable_buy_bean},#{is_enable_handdrip},#{is_checked},#{user_id},#{cafe_sns})")
    public void addCafe(CafeAddBean cafeAddBean);

    @Select("SELECT Cafe_ID FROM Cafe WHERE User_ID = #{user_id} ORDER BY Cafe_ID DESC LIMIT 1")
    public int cafeid2(CafeAddBean CafeAddBean);

    @Select("Select Is_SpecialUser FROM User WHERE User_PK = #{user_id}")
    public Boolean special(CafeAddBean cafeAddBean);

}
