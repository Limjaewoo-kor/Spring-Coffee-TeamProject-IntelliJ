package com.hiddenc.hyun.review.controller;

import com.hiddenc.hyun.review.dto.ReviewDto;
import com.hiddenc.hyun.review.dto.ReviewImg;
import com.hiddenc.hyun.review.dto.SimpleReviewDto;
import com.hiddenc.hyun.signupLogin.dto.ErrorMessage;
import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
@CrossOrigin
public class ReviewController {

    @Autowired
    UserDto userDto;

    @Autowired
    ReviewMapper reviewMapper;

    @Autowired
    ReviewDto reviewDto;

    @Autowired
    CafeMapper cafeMapper;


    // 방문한 카페 리뷰 등록
    @PostMapping("/login/addreview")
    @ResponseBody
    public Object addReview(@Validated SimpleReviewDto simpleReviewDto, BindingResult bindingResult) {
        simpleReviewDto.setUser_id(userDto.getUser_idpk());

        // 해당 유저가 방문한 카페인지를 확인
        int visit = reviewMapper.checkVisitLog(simpleReviewDto);

        // 해당 유저가 해당 카페에 이미 리뷰를 작성하였는지 확인
        int hasReview = reviewMapper.hasReview(simpleReviewDto);

        // 해당 유저가 방문한 카페인지를 확인
        if (visit == 0) {
            return "You didn't go there";

        // 해당 유저가 해당 카페에 이미 리뷰를 작성하였는지 확인
        } else if (hasReview != 0) {
            return "You already have a Review of this Cafe";

        // 해당 카페에 방문을 했고, 리뷰를 작성하지 않았으면 정상 등록
            // 유효성 검사
        } else {
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

            // 유효성 검사 통과 후 정상 등록
            } else {

                System.out.println("update Ajax post....");
                String uploadFolder = "/Users/limjaewoo/IdeaProjects/tempproject/src/main/webapp/resources/reviewimage/";
                System.out.println(simpleReviewDto.getReview_img());

                String uploadFileName = simpleReviewDto.getReview_img().getOriginalFilename();


                //iE has file path
                uploadFileName = uploadFileName.substring(uploadFileName.lastIndexOf("\\") + 1);
                UUID uuid = UUID.randomUUID();
                String filen = uuid.toString() + "_" + uploadFileName;
                File saveFile = new File(uploadFolder, filen);
                String fi = "resources/reviewimage/";
                String filedb = fi+filen;


                try {
                    simpleReviewDto.getReview_img().transferTo(saveFile);

                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
                reviewDto.setCafe_id(simpleReviewDto.getCafe_id());
                reviewDto.setRate(simpleReviewDto.getRate());
                reviewDto.setUser_id(simpleReviewDto.getUser_id());
                reviewDto.setReview(simpleReviewDto.getReview());
                reviewDto.setReview_img(filedb);
                reviewMapper.insertReview(reviewDto);
                return reviewDto;
            }
        }
    }

    // 본인이 올린 리뷰를 삭제
    @DeleteMapping("/login/deletereview")
    @ResponseBody
    public String deleteReview(@RequestBody SimpleReviewDto simpleReviewDto) {
        ReviewImg reviewImg = new ReviewImg();
        reviewImg.setCafe_id(simpleReviewDto.getCafe_id());
        reviewImg.setUser_id(userDto.getUser_idpk());
        String reviewname = reviewMapper.selimgReview(reviewImg);
            System.out.println(reviewname);


            String filePath = "/Users/limjaewoo/IdeaProjects/tempproject/src/main/webapp/"+reviewname;
            File deleteFile = new File(filePath);

            if(deleteFile.exists()){
                deleteFile.delete();
                System.out.println("파일삭제");


            }
                System.out.println("파일존재하지않는다");

            reviewDto.setUser_id(userDto.getUser_idpk());
            reviewDto.setCafe_id(simpleReviewDto.getCafe_id());
          simpleReviewDto.setUser_id(userDto.getUser_idpk());

        // 로그인 한 유저가 해당 카페에 리뷰를 작성하였는지 여부
        int hasReview = reviewMapper.hasReview(simpleReviewDto);

        System.out.println(hasReview);
        // 해당 카페에 리뷰를 작성하지 않았을 시
        if (hasReview == 0){
            return "You don't have a Review of this Cafe";}

        // 해당 카페에 리뷰를 작성했을 시 정상 삭제
         else {

            reviewMapper.deleteReview(reviewDto);
            return "Delete Success";
        }


    }

}
