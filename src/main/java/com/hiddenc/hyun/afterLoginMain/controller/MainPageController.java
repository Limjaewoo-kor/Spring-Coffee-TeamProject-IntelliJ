package com.hiddenc.hyun.afterLoginMain.controller;

import com.hiddenc.admin.beans.AllCafeBean;
import com.hiddenc.admin.beans.CafeBean;
import com.hiddenc.admin.beans.CafeImg;
import com.hiddenc.admin.beans.Review;
import com.hiddenc.hyun.afterLoginMain.dto.SimpleCafeDto;
import com.hiddenc.hyun.afterLoginMain.dto.TopCaffeine;
import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@CrossOrigin
@Controller
public class MainPageController {

    @Autowired
    CafeMapper cafeMapper;
    @Autowired
    UserMapper userMapper;
    @Autowired
    UserDto userDto;

 // 로그인 후 메인페이지 카페목록, 카페인지수 TOP12 가져오기
    @GetMapping("/login/main")
    @ResponseBody
    public AllCafeBean loginMain(AllCafeBean allCafeBean) {
        CafeBean cafeBean = new CafeBean();
        CafeImg cafeimg = new CafeImg();
        Review review = new Review();
        allCafeBean.setUser_id(userDto.getUser_id());
        allCafeBean.setUser_circle_img(userDto.getUser_Circle_img());
        List<CafeBean> cafeList = cafeMapper.selectAllCafes(cafeBean);
        List<CafeImg> imgList = cafeMapper.selectAllCafeimg(cafeimg);
        List<Review> reviewList = cafeMapper.selectAllReview(review);
        List<TopCaffeine> caffeineList = userMapper.selectTopCaffeine();
        allCafeBean.setCafebean(cafeList);
        allCafeBean.setCafeimg(imgList);
        allCafeBean.setReview(reviewList);
        allCafeBean.setTopCaffeines(caffeineList);
        return allCafeBean;
    }

}
