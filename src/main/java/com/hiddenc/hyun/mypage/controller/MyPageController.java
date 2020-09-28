package com.hiddenc.hyun.mypage.controller;

import com.hiddenc.hyun.mypage.dto.*;
import com.hiddenc.hyun.search.dto.ImageList;
import com.hiddenc.hyun.search.dto.ReviewList;
import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.mapper.UserMapper;
import com.hiddenc.model.mapper.VisitLogMapper;
import com.hiddenc.hyun.mypage.dto.LikeUserCafeList.UserLikeListDto;
import com.hiddenc.hyun.search.dto.AllResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@Controller
@CrossOrigin
public class MyPageController {

    @Autowired
    UserMapper userMapper;

    @Autowired
    CafeMapper cafeMapper;

    @Autowired
    VisitLogMapper visitLogMapper;

    @Autowired
    UserDto userDto;

    @Autowired
    com.hiddenc.admin.beans.adminAmontBean adminAmontBean;

//
//    @PostMapping("/admin/amont")
//    public ResponseEntity adminadmont(adminAmontBean2 adminAmontBean2){
//
//        adminAmontBean.setTotalAddcafe2(adminAmontBean2.getTotalAddcafe2());
//        adminAmontBean.setUserlike2(adminAmontBean2.getUserlike2());
//
//
//        return new ResponseEntity("amont complite", HttpStatus.OK);
//    }

    // 개인페이지 - 메인
    @GetMapping("/login/mypage")
    @ResponseBody
    public MypageMain GetMyPageMain(MypageMain mypageMain) {
        mypageMain.setUser_pk(userDto.getUser_idpk());
        mypageMain.setUser_id(userDto.getUser_id());
        mypageMain.setUser_circle_img(userMapper.selectMypageUserCircleImage(mypageMain));
        mypageMain.setUser_bg_img(userMapper.selectMypageUserBgImage(mypageMain));
        int userlike = userMapper.selectUSerLike(mypageMain);
        mypageMain.setUser_like(userlike);
        int totalAddCafe = userMapper.selectTotalAddcafe(mypageMain);
        mypageMain.setTotal_addcafe(totalAddCafe);
        mypageMain.setTotal_visited(userMapper.selectTotlaVisited(mypageMain));

        int count_like = userMapper.selectCountLike(mypageMain);
        mypageMain.setCount_like(count_like);

        int userlike2 = (adminAmontBean.getUserlike2());

        if(userlike2 == 0)
        userlike2 = 10;

        int totalAddcafe2 = (adminAmontBean.getTotalAddcafe2());

        if(totalAddcafe2 == 0)
            totalAddcafe2 = 30;
//        int userlike2 = 10;
//        int totalAddcafe2 = 30;
        int caffeine = (userlike * userlike2) + (totalAddCafe * totalAddcafe2);
        mypageMain.setUser_caffeine(caffeine);
        userMapper.updateUserMypage(mypageMain);
        return mypageMain;
    }

    // 개인페이지 - 방문한 카페목록
    @GetMapping("/login/visited")
    @ResponseBody
    public List<VisitiedCafeListDto> GetVisitedCafeList(VisitiedCafeListDto visitiedCafeListDto) {
        visitiedCafeListDto.setUser_pk(userDto.getUser_idpk());
        List<VisitiedCafeListDto> list = visitLogMapper.selectVisitedList(visitiedCafeListDto);
        return list;
    }


    // 개인페이지 - 방문한 카페목록 - 카페 상세페이
    @PostMapping("/login/visited/cafeinfo")
    @ResponseBody
    public AllResult selectResult1(@RequestBody AllResult allResult) {
        cafeMapper.updateCafeRate(allResult);
        allResult = cafeMapper.selectCafeInfo(allResult);
        List<ReviewList> list = cafeMapper.selectReview(allResult);
        List<ImageList> lmgList = cafeMapper.selectCafeImage(allResult);
        allResult.setReviewList(list);
        allResult.setCafe_image(lmgList);
        return allResult;
    }

    // 개인페이지 - 프로필관리 - 프로필 변경
    @PostMapping("/login/setting")
    @ResponseBody
    public ResponseEntity updateProfile(@Validated GetImgDto getImgDto, BindingResult bindingResult) {
        System.out.println(getImgDto.getUser_pw());
        ResponseEntity responseEntity = null;
        UpdateProfileDto updateProfileDto = new UpdateProfileDto();

        // 유효성검사
        if (bindingResult.hasErrors()) {
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            List<ErrorMessage> errorMessagesList = new ArrayList<>();
            for (ObjectError objectError : allErrors) {
                String defaultMessage = objectError.getDefaultMessage();
                String code = objectError.getCode();
                ErrorMessage errorMessage = new ErrorMessage(defaultMessage, code);
                errorMessagesList.add(errorMessage);
            }
            return new ResponseEntity(errorMessagesList, HttpStatus.BAD_REQUEST);

            // 유효성검사 통과 후
        } else {

            try {
                // 유저가 설정한 이미지 서버 컴퓨터에 저장
                String circleUploadFolder = "/Users/beadyoasis/IdeaProjects/tempproject_Jaewoo/src/main/webapp/resources/userimage/circle/";
                String bgUploadFolder = "/Users/beadyoasis/IdeaProjects/tempproject_Jaewoo/src/main/webapp/resources/userimage/background/";

                String id = userDto.getUser_id();

                String circleName = id + "_circle.png";
                String bgName = id + "_bg.png";

                File circleSaveFile = new File(circleUploadFolder, circleName);
                File bgSaveFile = new File(bgUploadFolder, bgName);
                String circleFi = "resources/userimage/circle/";
                String bgFi = "resources/userimage/background/";
                String circleDb = circleFi + circleName;
                String bgDb = bgFi + bgName;

                MultipartFile circle_img = getImgDto.getUser_circle_img();
                MultipartFile bg_img = getImgDto.getUser_bg_img();
                String user_pw = getImgDto.getUser_pw();
                String user_status = getImgDto.getUser_status();
                String user_email = getImgDto.getUser_email();

                // circle img 수정
                if (circle_img != null) {
                    updateProfileDto.setUser_id(id);
                    getImgDto.getUser_circle_img().transferTo(circleSaveFile);
                    updateProfileDto.setUser_circle_img(circleDb);
                    userMapper.updateUserProfileCirclePic(updateProfileDto);
                }

                // bg img 수정
                if (bg_img != null) {
                    updateProfileDto.setUser_id(id);
                    getImgDto.getUser_bg_img().transferTo(bgSaveFile);
                    updateProfileDto.setUser_bg_img(bgDb);
                    userMapper.updateUserProfileBgPic(updateProfileDto);
                }

                // user_pw 수정
                if (user_pw != null) {
                    BCryptPasswordEncoder scpwd = new BCryptPasswordEncoder();
                    String password = scpwd.encode(getImgDto.getUser_pw());
                    updateProfileDto.setUser_id(id);
                    updateProfileDto.setUser_pw(password);
                    userMapper.updateUserPW(updateProfileDto);
                }

                // user_status 수정
                if (user_status != null) {
                    updateProfileDto.setUser_id(id);
                    updateProfileDto.setUser_status(getImgDto.getUser_status());
                    userMapper.updateUserStatus(updateProfileDto);
                }

                // user_email 수정
                if (user_email != null) {
                    updateProfileDto.setUser_id(id);
                    updateProfileDto.setUser_email(getImgDto.getUser_email());
                    userMapper.updateUserEmail(updateProfileDto);
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
            ResponseEntity responseEntity1 = new ResponseEntity("changeCompleted", HttpStatus.OK);
            return responseEntity1;
        }
    }


    //  개인페이지 - 내가 좋아요를 누른 유저 목록
    @GetMapping("/login/Likelist")
    @ResponseBody
    public UserLikeListDto getUserLike(UserLikeListDto userLikeListDto) {

        // DB 조회를 위한 로그인한 유저의 개인키 세팅
        userLikeListDto.setPush_user(userDto.getUser_idpk());

        // 좋아요를 누른 유저가 방문한 카페목록
        userLikeListDto.setCafeList(userMapper.selectUserLikeCafeList(userLikeListDto));

        // 유저가 좋아요를 누른 유저의 아이디와 기본키 불러오기
        userLikeListDto.setUser_id(userMapper.selectUserLike(userLikeListDto));
        return userLikeListDto;
    }


    // 개인페이지 - 회원탈퇴
    @DeleteMapping("/login/withdraw")
    @ResponseBody
    public String withdrawUser(WithdrawUserDto withdrawUserDto) {
        withdrawUserDto.setUser_pk(userDto.getUser_idpk());

        // 탈퇴 처리 전 해당 유저가 등록한 카페를 관리자 등록으로 변경
        userMapper.updateUserCafeToAdmin(withdrawUserDto);

        String id = userDto.getUser_id();

        String circle_filePath = "/Users/beadyoasis/IdeaProjects/tempproject_Jaewoo/src/main/webapp/resources/userimage/circle/" + id + "_circle.png";
        String bg_filePath = "/Users/beadyoasis/IdeaProjects/tempproject_Jaewoo/src/main/webapp/resources/userimage/background/" + id + "_bg.png";
        File circle_deleteFile = new File(circle_filePath);
        File bg_deleteFile = new File(bg_filePath);

        if (circle_deleteFile.exists()) {
            circle_deleteFile.delete();
            System.out.println("circle 파일삭제");
        }

        if (bg_deleteFile.exists()) {
            bg_deleteFile.delete();
            System.out.println("background 파일삭제");
        }
        // 해당 유저의 세션 해제 후 기본키로 탈퇴 처리
        userDto.setLoggedIn(false);
        userMapper.deleteUser(withdrawUserDto);
        return "Good Bye :) ";
    }
}
