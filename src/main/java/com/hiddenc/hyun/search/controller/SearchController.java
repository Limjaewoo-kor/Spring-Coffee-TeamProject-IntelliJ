package com.hiddenc.hyun.search.controller;

import com.hiddenc.hyun.search.dto.ImageList;
import com.hiddenc.hyun.search.dto.ReviewList;
import com.hiddenc.hyun.search.dto.SearchResultDto;
import com.hiddenc.hyun.search.dto.SearchUserDto;
import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.mapper.UserMapper;
import com.hiddenc.hyun.search.dto.AllResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@CrossOrigin
public class SearchController {

    @Autowired
    UserMapper userMapper;

    @Autowired
    CafeMapper cafeMapper;

    @Autowired
    UserDto userDto;

    // 카페검색 - 메인화면
    @GetMapping("/login/search")
    @ResponseBody
    public SearchUserDto searchMain(SearchUserDto searchUserDto) {
        searchUserDto.setUser_id(userDto.getUser_id());
        searchUserDto.setUser_Bg_img(userMapper.selectUserBgImage(userDto));
        searchUserDto.setUser_Circle_img(userMapper.selectUserCircleImage(userDto));
        return searchUserDto;
    }

//    // 카페검색 - 검색결과 - 상단 고정 유저정보
//    @GetMapping("/login/search/result")
//    @ResponseBody
//    public SearchUserDto searchResultGetUser(SearchUserDto searchUserDto) {
//        searchUserDto.setUser_id(userDto.getUser_id());
//        searchUserDto.setUser_Circle_img(userMapper.selectUserCircleImage(userDto));
//        return searchUserDto;
//    }

    // 카페검색 - 검색결과
    @PostMapping("/login/search/result")
    @ResponseBody
    public List<SearchResultDto> searchResultGetCafe(SearchResultDto searchResultDto) {
        List<SearchResultDto> list = cafeMapper.selectSearchResult(searchResultDto);
        return list;
    }


    // 카페검색 - 검색결과 - 상단고정 유저 정보
//   @GetMapping("/login/search/result/cafeinfo")
//    @ResponseBody
//    public SearchUserDto searchResultCafeGetUser(SearchUserDto searchUserDto) {
//        searchUserDto.setUser_id(userDto.getUser_id());
//        searchUserDto.setUser_image(userMapper.selectUserImage(userDto));
//        return searchUserDto;
//    }


// 카페상세페이지 - 카페정보, 카페리뷰, 카페이미지
    @PostMapping("/login/search/result/cafeinfo")
    @ResponseBody
    public AllResult selectResult(@RequestBody AllResult allResult) {
        cafeMapper.updateCafeRate(allResult);
        allResult = cafeMapper.selectCafeInfo(allResult);
        List<ReviewList> list = cafeMapper.selectReview(allResult);
        List<ImageList> lmgList = cafeMapper.selectCafeImage(allResult);
        allResult.setReviewList(list);
        allResult.setCafe_image(lmgList);
        return allResult;
    }
}

