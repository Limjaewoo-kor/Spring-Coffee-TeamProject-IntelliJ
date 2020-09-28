package com.hiddenc.model.mapper;

import com.hiddenc.hyun.mypage.dto.VisitiedCafeListDto;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface VisitLogMapper {

    // 본인이 방문한 카페 목록
    @Select("SELECT A.Cafe_ID, A.Cafe_Name, A.Cafe_Location, C.Cafe_Image, B.User_PK FROM VisitLog B LEFT JOIN Cafe A on A.Cafe_ID = B.Cafe_ID LEFT JOIN Cafe_image C on A.Cafe_ID = C.Cafe_ID WHERE B.User_PK = #{user_pk} GROUP BY A.Cafe_ID")
    public List<VisitiedCafeListDto> selectVisitedList(VisitiedCafeListDto visitiedCafeListDto);



}
